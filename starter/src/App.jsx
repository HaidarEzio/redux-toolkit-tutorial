import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import CartContainer from "./components/CartContainer";
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {/* {isOpen && <Modal />} */}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
