import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const FourOhFourPage = (): void => {
  const { push } = useRouter();

  useEffect(() => {
    push("/");
  }, [push]);
};

export default FourOhFourPage;
