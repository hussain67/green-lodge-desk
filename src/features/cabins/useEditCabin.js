import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editCabin as editCabinApi } from "../../services/apiCabins";

export function useEditCabin() {
	// EDIT
	const queryClient = useQueryClient();
	const { mutate: editCabin, isLoading: isEditing } = useMutation({
		mutationFn: ({ newCabinData, id }) => editCabinApi(newCabinData, id),
		onSuccess: () => {
			toast.success("Cabin successfully edited");
			queryClient.invalidateQueries({
				queryKey: ["cabins"]
			});
		},
		onError: err => {
			toast.error(err.message);
		}
	});
	return { isEditing, editCabin };
}
