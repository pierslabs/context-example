import { createContext, useCallback, useState } from "react";
import { UserDetail } from "../interfaces/checkout.interfaces";
import { CheckoutStep } from "../enum/checkout.enum";

interface CheckoutContextProps {
  step: CheckoutStep;
  done: boolean;
  user: UserDetail;
  handleStep: (step: CheckoutStep) => void;
  handleUser?: (user: UserDetail) => void;
  setDone: (done: boolean) => void;
}

export const CheckoutContext = createContext<CheckoutContextProps>(
  {} as CheckoutContextProps
);

const userInitialValues: UserDetail = {
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
  const [step, setStep] = useState(CheckoutStep.ADDRESS);
  const [user, setUser] = useState<UserDetail>(userInitialValues);
  const [done, setDone] = useState(false);
  const handleStep = (step: CheckoutStep) => {
    setStep(step);
  };

  const handleUser = useCallback((user: UserDetail) => {
    setUser(user);
  }, []);

  return (
    <CheckoutContext.Provider
      value={{ step, user, done, handleStep, handleUser, setDone }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
