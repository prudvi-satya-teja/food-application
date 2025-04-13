import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
    const cartItems = useSelector((store) => {
        return store.cart.items;
    });
    console.log(cartItems);

    return (
        <div>
            <h1 className="text-center font-bold text-2xl m-4">Cart</h1>
            <div className="flex justify-around">
                <div className="bg-gray-100 p-4 m-4 text-lg  w-6/12 justify-around">
                    <ItemList data={cartItems}></ItemList>
                </div>
            </div>
        </div>
    );
};

export default Cart;
