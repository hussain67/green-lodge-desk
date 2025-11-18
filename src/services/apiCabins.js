import supabase, { supabaseUrl } from "./supabase";

// Get cabins
export async function getCabins() {
	let { data, error } = await supabase.from("cabins").select("*");
	if (error) {
		throw Error("Cabins could not be loaded!");
	}
	return data;
}

// Create Cabin
export async function createCabin(newCabin) {
	const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
	const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
	const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
	const { data, error } = await supabase
		.from("cabins")
		.insert([{ ...newCabin, image: hasImagePath ? newCabin.image : imagePath }])
		.select();
	if (error) {
		throw new Error("Cabin could not be created");
	}
	if (hasImagePath) {
		return data;
	}
	// Upload Image
	const { error: storageError } = await supabase.storage.from("cabin-images").upload(imageName, newCabin.image);
	if (storageError) {
		await supabase.from("cabins").delete().eq("id", data.id);
		throw new Error("Cabin image could not be created");
	}
	//
	return data;
}

// Edit Cabin

export async function editCabin(newCabin, id) {
	const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

	const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");

	const imagePath = hasImagePath ? newCabin?.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

	const { data, error } = await supabase
		.from("cabins")
		.update({ ...newCabin, image: imagePath })
		.eq("id", id)
		.select()
		.single();
	if (error) {
		throw new Error("Cabin could not be edited");
	}

	// Upload Image
	if (!hasImagePath) {
		const { error: storageError } = await supabase.storage.from("cabin-images").upload(imageName, newCabin.image);
		if (storageError) {
			await supabase.from("cabins").delete().eq("id", data.id);
			throw new Error("Cabin image could not be created");
		}
	}
	//
	return data;
}

// Delete Cabin

export async function deleteCabin(id) {
	const { error } = await supabase.from("cabins").delete().eq("id", id);
	if (error) {
		throw new Error("Cabin could not be deleted");
	}
}
