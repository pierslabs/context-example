import { useContext, useState } from "react";
import { CheckoutContext } from "../../context/checkout.context";
import { CheckoutStep } from "../../enum/checkout.enum";

export const useShipping = () => {
  const { step, handleUser, user, handleStep } = useContext(CheckoutContext);
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleSelectMethod = (method: string) => {
    setSelectedMethod(method);
    handleUser && handleUser({ ...user, shippingMethod: method });
  };

  const handleContinue = () => {
    handleStep(CheckoutStep.PAYMENT);
  };

  return { step, selectedMethod, handleSelectMethod, handleContinue };
};
