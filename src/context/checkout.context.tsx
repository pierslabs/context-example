import { createContext, useCallback, useMemo, useState } from "react";
import { IAddressShipping } from "../interfaces/checkout.interfaces";
import { CheckoutStep } from "../enum/checkout.enum";

interface CheckoutContextProps {
  step: CheckoutStep;
  done: boolean;
  addressShipping: IAddressShipping;
  handleStep: (step: CheckoutStep) => void;
  handleAddressShipping?: (address: IAddressShipping) => void;
  handleDone: (done: boolean) => void;
  statesCode: string[];
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
  statesCode: string[];
}

const CheckoutProvider = ({ children, statesCode }: Props) => {
  // states
  const [step, setStep] = useState(CheckoutStep.ADDRESS);
  const [done, setDone] = useState(false);
  const [addressShipping, setAddressShipping] = useState<IAddressShipping>(
    addressShippingInitialValues
  );

  // functions
  const handleStep = useCallback((step: CheckoutStep) => {
    setStep(step);
  }, []);

  const handleAddressShipping = useCallback((address: IAddressShipping) => {
    setAddressShipping(address);
  }, []);

  const handleDone = useCallback((done: boolean) => {
    setDone(done);
  }, []);

  const values = useMemo(
    () => ({
      handleStep,
      handleAddressShipping,
      handleDone,
      step,
      done,
      addressShipping,
      statesCode,
    }),
    [step]
  );

  return (
    <CheckoutContext.Provider value={values}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
