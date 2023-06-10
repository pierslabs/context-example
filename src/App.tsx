import { Address } from "./components/Address";
import { Payment } from "./components/Payment";
import { ShippingMethod } from "./components/ShippingMethod";
import CheckoutProvider from "./context/checkout.context";
import Confirm from "./components/Confirm/Confirm";
import { states } from "./db/states";

function App() {
  return (
    <CheckoutProvider statesCode={states}>
      <h1 className="text-2xl">Checkout </h1>
      <hr />
      <Address />
      <ShippingMethod />
      <Payment />
      <Confirm />
    </CheckoutProvider>
  );
}

export default App;
