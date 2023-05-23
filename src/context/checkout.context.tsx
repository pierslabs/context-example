import { createContext, useCallback, useState } from "react";
import { IAddressShipping } from "../interfaces/checkout.interfaces";
import { CheckoutStep } from "../enum/checkout.enum";

interface CheckoutContextProps {
  step: CheckoutStep;
  done: boolean;
  addressShipping: IAddressShipping;
  handleStep: (step: CheckoutStep) => void;
  handleAddressShipping?: (address: IAddressShipping) => void;
  setDone: (done: boolean) => void;
}

export const CheckoutContext = createContext<CheckoutContextProps>(
  {} as CheckoutContextProps
);

const addressShippingInitialValues: IAddressShipping = {
  street: "",
  city: "",
  state: "",
  postalCode: "",
  shippingMethod: "",
  paymentMethod: "",
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const CheckoutProvider = ({ children }: Props) => {
  // states
  const [step, setStep] = useState(CheckoutStep.ADDRESS);
  const [done, setDone] = useState(false);
  const [addressShipping, setAddressShipping] = useState<IAddressShipping>(
    addressShippingInitialValues
  );

  // functions
  const handleStep = (step: CheckoutStep) => {
    setStep(step);
  };

  const handleAddressShipping = (address: IAddressShipping) => {
    setAddressShipping(address);
  };

  return (
    <CheckoutContext.Provider
      value={{
        step,
        addressShipping,
        done,
        handleStep,
        handleAddressShipping,
        setDone,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
