import { CheckoutStep } from "../../enum/checkout.enum";
import { useShipping } from "./useShippingHook";
import { AiFillCheckCircle } from "react-icons/ai";

const ShippingMethod = () => {
  const { step, selectedMethod, handleSelectMethod, handleContinue } =
    useShipping();
  console.log("render shipping");
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="mb-6 text-2xl font-bold text-center">Método de Envío</h2>

      {step === CheckoutStep.SHIPPING && (
        <div className="flex justify-center space-x-4 mb-4">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none ${
              selectedMethod === "standard"
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleSelectMethod("standard")}
          >
            Estándar
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none ${
              selectedMethod === "express"
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleSelectMethod("express")}
          >
            Express
          </button>
        </div>
      )}

      {selectedMethod && step === CheckoutStep.SHIPPING && (
        <div className="p-4 border border-gray-300 rounded-md">
          <h3 className="text-lg font-medium mb-4">
            Método de Envío Seleccionado
          </h3>
          <p>
            <span className="font-medium">Método:</span>{" "}
            {selectedMethod === "standard" ? "Estándar" : "Express"}
          </p>
          <div className="text-center">
            <button
              onClick={handleContinue}
              type="button"
              className="mt-3 ml-72 inline-block px-6 py-2 text-sm font-medium leading-5 text-white uppercase bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Continuar
            </button>
          </div>
        </div>
      )}
      {selectedMethod &&
        (step === CheckoutStep.PAYMENT || step === CheckoutStep.REVIEW) && (
          <div className="p-4 border border-gray-300 rounded-md">
            <div className="flex justify-between">
              <h3 className="text-lg  mb-4">Método de Envío Seleccionado:</h3>

              <div className="text-center">
                <AiFillCheckCircle color="green" size={30} />
              </div>
            </div>
            <h3 className="text-blue-500 font-bold">
              {selectedMethod === "standard" ? "Estándar" : "Express"}
            </h3>
          </div>
        )}
    </div>
  );
};

export default ShippingMethod;
