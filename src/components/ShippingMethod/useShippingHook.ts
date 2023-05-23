import { useContext, useState } from "react";
import { CheckoutContext } from "../../context/checkout.context";
import { CheckoutStep } from "../../enum/checkout.enum";

export const useShipping = () => {
  const { step, handleAddressShipping, addressShipping, handleStep } =
    useContext(CheckoutContext);
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleSelectMethod = (method: string) => {
    setSelectedMethod(method);
    handleAddressShipping &&
      handleAddressShipping({ ...addressShipping, shippingMethod: method });
  };

  const handleContinue = () => {
    handleStep(CheckoutStep.PAYMENT);
  };

  return { step, selectedMethod, handleSelectMethod, handleContinue };
};
