import { CheckoutStep } from "../../enum/checkout.enum";
import { ClimbingBoxLoader } from "react-spinners";
import { AiFillCheckCircle } from "react-icons/ai";
import { useConfirm } from "./useConfirmHooks";

const Confirm = () => {
  const { step, done } = useConfirm();

  return (
    <>
      {step === CheckoutStep.CONFIRM && (
        <div className="bg-white  min-w-full shadow-md rounded-lg p-4 fixed inset-0 flex flex-col justify-center items-center z-50">
          {done && <AiFillCheckCircle color="green" size={130} />}
          {!done && <ClimbingBoxLoader color="green" />}
          <h3 className="mt-10">
            Su pedido se {done ? "ha realizado" : "esta realizando"}
          </h3>
        </div>
      )}
    </>
  );
};

export default Confirm;
