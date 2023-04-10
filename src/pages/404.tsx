import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const FourOhFourPage = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/");
  }, [push]);
};

export default FourOhFourPage;
