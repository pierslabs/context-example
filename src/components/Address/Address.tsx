import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAddress } from "./useAddressHook";
import { CheckoutStep } from "../../enum/checkout.enum";

const AddressForm = () => {
  const { step, user, handleSubmit, AddressSchema, handleEdit } = useAddress();

  return (
    <>
      <h2 className="text-2xl font-bold text-center mt-10">Dirección</h2>
      <div className="max-w-md mx-auto  border-2 p-3 ">
        {step === CheckoutStep.ADDRESS && (
          <Formik
            initialValues={user}
            validationSchema={AddressSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="street"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Calle y número
                </label>
                <Field
                  type="text"
                  id="street"
                  name="street"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="street"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Ciudad
                </label>
                <Field
                  type="text"
                  id="city"
                  name="city"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="state"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Estado
                </label>
                <Field
                  type="text"
                  id="state"
                  name="state"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="state"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="postalCode"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Código postal
                </label>
                <Field
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="postalCode"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block px-6 py-2 text-sm font-medium leading-5 text-white uppercase bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                  Continuar
                </button>
              </div>
            </Form>
          </Formik>
        )}

        {step !== CheckoutStep.ADDRESS && (
          <div className="mt-8 p-4 border border-gray-300 rounded-md">
            <div className="flex justify-end">
              <button
                type="button"
                className="px-2 py-1 text-sm text-indigo-500 hover:text-indigo-700 focus:outline-none"
                onClick={handleEdit}
              >
                Editar
              </button>
            </div>
            <h3 className="text-lg font-medium mb-4">
              Información de la dirección
            </h3>
            <p>
              <span className="font-medium">Calle y número:</span> {user.street}
            </p>
            <p>
              <span className="font-medium">Ciudad:</span> {user.city}
            </p>
            <p>
              <span className="font-medium">Estado:</span> {user.state}
            </p>
            <p>
              <span className="font-medium">Código postal:</span>
              {user.postalCode}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default AddressForm;
