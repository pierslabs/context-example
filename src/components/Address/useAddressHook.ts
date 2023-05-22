import { FormikHelpers } from "formik";
import { CheckoutStep } from "../../enum/checkout.enum";
import { UserDetail } from "../../interfaces/checkout.interfaces";
import { useContext } from "react";
import { CheckoutContext } from "../../context/checkout.context";
import * as Yup from "yup";

export const useAddress = () => {
  const { step, handleStep, user, handleUser } = useContext(CheckoutContext);

  //Validations
  const AddressSchema = Yup.object().shape({
    street: Yup.string().required("Campo requerido"),
    city: Yup.string().required("Campo requerido"),
    state: Yup.string().required("Campo requerido"),
    postalCode: Yup.string().required("Campo requerido"),
  });

  // Submit
  const handleSubmit = (
    values: UserDetail,
    { setSubmitting, resetForm }: FormikHelpers<UserDetail>
  ) => {
    handleStep(CheckoutStep.SHIPPING);
    handleUser && handleUser(values);
    setSubmitting(false);
    resetForm();
  };

  // Edit
  const handleEdit = () => {
    handleStep(CheckoutStep.ADDRESS);
  };
  return {
    step,
    handleStep,
    user,
    handleUser,
    handleSubmit,
    AddressSchema,
    handleEdit,
  };
};
