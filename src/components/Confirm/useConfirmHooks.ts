import { useContext } from "react";
import { CheckoutContext } from "../../context/checkout.context";

export const useConfirm = () => {
  const { step, done, addressShipping } = useContext(CheckoutContext);

  return { step, done, addressShipping };
};
