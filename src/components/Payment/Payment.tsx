import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { usePayment } from "./usePaymentHook";
import { CheckoutStep } from "../../enum/checkout.enum";
import { AiFillCheckCircle } from "react-icons/ai";
import { memo, useRef } from "react";

const Payment = () => {
  const {
    selectedMethod,
    step,
    handleSelectMethod,
    handleContinue,
    handleConfirm,
  } = usePayment();

  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="mb-6 text-2xl font-bold text-center">
        Método de Pago: me he renderizado {renderCount.current}
      </h2>

      {step === CheckoutStep.PAYMENT && (
        <div className="flex justify-center space-x-4 mb-4">
          <button
            className={`flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md focus:outline-none ${
              selectedMethod === "creditCard"
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleSelectMethod("creditCard")}
          >
            <FaCreditCard className="mr-2" />
            Tarjeta de Crédito
          </button>
          <button
            className={`flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md focus:outline-none ${
              selectedMethod === "paypal"
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleSelectMethod("paypal")}
          >
            <FaPaypal className="mr-2" />
            PayPal
          </button>
        </div>
      )}

      {selectedMethod === "creditCard" && step === CheckoutStep.PAYMENT && (
        <div className="p-4 border border-gray-300 rounded-md">
          <h3 className="text-lg font-medium mb-4">
            Método de Pago Seleccionado: Tarjeta de Crédito
          </h3>
          <form>{/* Campos del formulario para la tarjeta de crédito */}</form>

          <button
            onClick={handleContinue}
            type="button"
            className="mt-3 ml-72 inline-block px-6 py-2 text-sm font-medium leading-5 text-white uppercase bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Continuar
          </button>
        </div>
      )}

      {selectedMethod === "paypal" && step === CheckoutStep.PAYMENT && (
        <div className="p-4 border border-gray-300 rounded-md">
          <h3 className="text-lg font-medium mb-4">
            Método de Pago Seleccionado: PayPal
          </h3>
          <p>
            <FaPaypal className="inline-block mr-2" />
            Conecta tu cuenta de PayPal para completar la transacción.
          </p>
          <button
            onClick={handleContinue}
            type="button"
            className="mt-3 ml-72 inline-block px-6 py-2 text-sm font-medium leading-5 text-white uppercase bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Continuar
          </button>
        </div>
      )}
      {step === CheckoutStep.REVIEW && (
        <>
          <div className="p-4 border border-gray-300 rounded-md flex justify-between">
            <div>
              <h3 className="text-lg font-medium mb-4">
                Método de Pago Seleccionado:
              </h3>
              <h3 className="text-blue-500 font-bold">{selectedMethod}</h3>
            </div>
            <div className="text-center">
              <AiFillCheckCircle color="green" size={30} />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleConfirm}
            >
              Confirmar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default memo(Payment);
