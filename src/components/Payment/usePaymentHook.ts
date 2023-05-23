import { useContext, useState } from "react";
import { CheckoutStep } from "../../enum/checkout.enum";
import { CheckoutContext } from "../../context/checkout.context";

export const usePayment = () => {
  const { handleAddressShipping, addressShipping, handleStep, step, setDone } =
    useContext(CheckoutContext);
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleSelectMethod = (method: string) => {
    setSelectedMethod(method);
    handleAddressShipping &&
      handleAddressShipping({ ...addressShipping, paymentMethod: method });
  };

  const handleContinue = () => {
    handleStep(CheckoutStep.REVIEW);
  };

  const handleConfirm = () => {
    handleStep(CheckoutStep.CONFIRM);
    setInterval(() => {
      setDone(true);
    }, 6000);
  };

  return {
    //states
    selectedMethod,
    step,
    //methods
    handleSelectMethod,
    handleContinue,
    handleConfirm,
  };
};
