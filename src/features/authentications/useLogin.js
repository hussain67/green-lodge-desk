import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { mutate: login, isLoading } = useMutation({
		mutationFn: ({ email, password }) => loginApi({ email, password }),
		onSuccess: user => {
			// Immediately after login user do not need to refech
			queryClient.setQueryData(["user"], user.user);
			navigate("/dashboard");
		},
		onError: err => {
			console.log("ERROR", err);
			toast.error("Provided email or password do not match");
		}
	});
	return { login, isLoading };
}
