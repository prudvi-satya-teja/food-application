const Shimmer = () => {
    const array = [1, 2, 3, 4, 5];
    return (
        <div className="flex flex-wrap">
            {array.map((i) => (
                <div key={i}>
                    <div className="m-4 p-4 bg-gray-200 w-60 h-90"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
