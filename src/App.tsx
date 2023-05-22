import { Address } from "./components/Address";
import { Payment } from "./components/Payment";
import { ShippingMethod } from "./components/ShippingMethod";
import CheckoutProvider from "./context/checkout.context";
import Confirm from "./components/Confirm/Confirm";

function App() {
  return (
    <CheckoutProvider>
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
