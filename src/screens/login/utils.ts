import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import { toast } from "react-toastify";

export function useForm() {
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data?.success) {
      toast.warn(fetcher.data?.error);
    }
  }, [fetcher.data]);

  return fetcher.Form;
}
