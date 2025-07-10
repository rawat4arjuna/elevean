import API from "@/axios/axiosInstance";
import { CREATE_ACCOUNT, LOGIN } from "@/axios/urls";
import { useRouter } from "next/navigation";
import { showSnackbar } from "@/store/snackbarStore";
import Cookies from "js-cookie";
export default function useAuth() {
  const router = useRouter();
  const createAccount = (payload) => {
    API.post(CREATE_ACCOUNT, payload)
      .then((res) => {
        if (res.data?.success) {
          showSnackbar("Account created successfully!", "success");
        } else {
          showSnackbar(res.data?.message || "Account creation failed", "error");
        }
      })
      .catch((err) => {
        showSnackbar(
          err?.response?.data?.message || "Account creation failed",
          "error"
        );
      });
  };

  const login = (payload) => {
    API.post(LOGIN, payload)
      .then((res) => {
        if (res.data?.success) {
          Cookies.set("authToken", res.data?.token, { expires: 7 });
          showSnackbar("Login successful!", "success");
          router.push("/dashboard");
        } else {
          showSnackbar(res.data?.message || "Login failed", "error");
        }
      })
      .catch((err) => {
        showSnackbar(err?.response?.data?.message || "Login failed", "error");
      });
  };
  return {
    createAccount,
    login,
  };
}
