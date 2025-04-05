import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowItem }) => {
    const handleClick = () => {
        setShowItem();
    };
    console.log(data?.card?.card);
    return (
        <div className="shadow-lg  w-6/12 m-auto my-2 bg-black">
            <div className="p-2 bg-gray-200 flex justify-between" onClick={handleClick}>
                <div className="font-semibold">
                    {`${data?.card?.card?.title} (${data?.card?.card?.itemCards?.length})`}
                </div>
                {showItems ? <div>{"⬆️"}</div> : <div>{"⬇️"}</div>}
            </div>
            {showItems && (
                <div className="bg-gray-100 p-2">
                    <ItemList key={data?.card?.card?.title} data={data?.card?.card?.itemCards} />
                </div>
            )}
        </div>
    );
};

export default RestaurantCategory;
