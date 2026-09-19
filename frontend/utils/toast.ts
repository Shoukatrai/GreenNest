import { Bounce, toast } from "react-toastify";

export const showtoast = (message: string, type: "success" | "error") => {
  const options = {
    position: "top-right" as const,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light" as const,
    transition: Bounce,
  };

  if (type === "success") {
    toast.success(message, options);
  } else {
    toast.error(message, options);
  }
};