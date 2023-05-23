import { CheckoutStep } from "../../enum/checkout.enum";
import { ClimbingBoxLoader } from "react-spinners";
import { AiFillCheckCircle } from "react-icons/ai";
import { useConfirm } from "./useConfirmHooks";

const Confirm = () => {
  const { step, done, addressShipping } = useConfirm();

  return (
    <>
      {step === CheckoutStep.CONFIRM && (
        <div className="bg-white  min-w-full shadow-md rounded-lg  p-4 fixed inset-0 flex flex-col justify-center items-center z-50">
          {done && <AiFillCheckCircle color="green" size={130} />}
          {!done && <ClimbingBoxLoader color="green" />}

          <h3 className="mt-2">
            Su pedido se {done ? "ha realizado" : "esta realizando"}
          </h3>
          {done && (
            <div className="mt-10  border shadow-xl  p-10">
              <p className="flex mt-1">
                <span className="font-bold text-blue-700">Street:</span>{" "}
                {addressShipping.street}
              </p>
              <p className="flex mt-1">
                <span className="font-bold text-blue-700">City:</span>
                {addressShipping.city}
              </p>
              <p className="flex mt-1">
                <span className="font-bold text-blue-700">State:</span>{" "}
                {addressShipping.state}
              </p>
              <p className="flex mt-1">
                <span className="font-bold text-blue-700">PostalCode:</span>{" "}
                {addressShipping.postalCode}
              </p>
              <p className="flex mt-1">
                <span className="font-bold text-blue-700">ShippingMethod:</span>{" "}
                {addressShipping.shippingMethod}
              </p>
              <p className="flex mt-1">
                <span className="font-bold text-blue-700">PaymentMethod:</span>{" "}
                {addressShipping.paymentMethod}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Confirm;
