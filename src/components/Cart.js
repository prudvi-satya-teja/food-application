import { useDispatch, useSelector } from "react-redux";
import CartItemList from "./CartItemList";
import { clearCart } from "../utils/ReduxStore/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => {
        return store.cart.items;
    });
    console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return cartItems.length == 0 ? (
        <div className="text-center my-30 font-bold p-4"> Cart is Empty Please Add Items</div>
    ) : (
        <div>
            <h1 className="text-center font-bold text-2xl m-4">Cart</h1>
            <button
                className="bg-black text-white m-2 p-2 rounded-lg ml-120"
                onClick={handleClearCart}
            >
                Clear Cart
            </button>
            <div className="flex justify-around">
                <div className="bg-gray-100 p-4 m-4 text-lg  w-6/12 justify-around">
                    <CartItemList data={cartItems}></CartItemList>
                </div>
            </div>
        </div>
    );
};

export default Cart;
