import API from "@/axios/axiosInstance";
import { CREATE_ACCOUNT, LOGIN } from "@/axios/urls";
import { useRouter } from "next/navigation";
export default function useAuth() {
  const router = useRouter();
  const createAccount = (payload) => {
    API.post(CREATE_ACCOUNT, payload);
  };

  const login = (payload) => {
    API.post(LOGIN, payload).then((res) => {
      if (res.data?.success) {
        localstorage.setItem("authToken", res.data?.token);
        router.push("/dashboard");
      }
    });
    
  };
  return {
    createAccount,
  };
}
