import { FormikHelpers } from "formik";
import { CheckoutStep } from "../../enum/checkout.enum";
import { IAddressShipping } from "../../interfaces/checkout.interfaces";
import { useContext } from "react";
import { CheckoutContext } from "../../context/checkout.context";
import * as Yup from "yup";

export const useAddress = () => {
  const { step, handleStep, addressShipping, handleAddressShipping } =
    useContext(CheckoutContext);

  //Validations
  const AddressSchema = Yup.object().shape({
    street: Yup.string().required("Campo requerido"),
    city: Yup.string().required("Campo requerido"),
    state: Yup.string().required("Campo requerido"),
    postalCode: Yup.string().required("Campo requerido"),
  });

  // Submit
  const handleSubmit = (
    values: IAddressShipping,
    { setSubmitting, resetForm }: FormikHelpers<IAddressShipping>
  ) => {
    handleStep(CheckoutStep.SHIPPING);
    handleAddressShipping && handleAddressShipping(values);
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
    addressShipping,
    handleAddressShipping,
    handleSubmit,
    AddressSchema,
    handleEdit,
  };
};
