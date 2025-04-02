const Footer = () => {
    return (
        <div className=" bg-gray-400 mt-15">
            <div className="flex p-4  justify-around">
                <div className=" p-4">
                    <div className="text-lg py-2 font-medium">
                        <h2>Shop Matcha</h2>
                    </div>
                    <ul>
                        <li className="py-1">Starter Kits</li>
                        <li className="py-1">Lattes & Sweetened</li>
                        <li className="py-1">Just the Matcha</li>
                        <li className="py-1">Matchware</li>
                    </ul>
                </div>
                <div className="p-4">
                    <div className="text-lg py-2 font-medium">
                        <h3>More from Food</h3>
                    </div>
                    <ul>
                        <li className="py-1">Our Story</li>
                        <li className="py-1">Matcha Recipes</li>
                        <li className="py-1">Caffeine Content</li>
                        <li className="py-1">Heal Benefits</li>
                        <li className="py-1">FAQ's</li>
                    </ul>
                </div>
                <div className="p-4">
                    <div className="text-lg py-2 font-medium">
                        <h3>Learn</h3>
                    </div>
                    <ul>
                        <li className="py-1">Sign in</li>
                        <li className="py-1">Wholesale Oppurtunities</li>
                        <li className="py-1">Affiliate</li>
                        <li className="py-1">Contact us</li>
                    </ul>
                </div>
                <div className="p-4">
                    <div className="text-lg py-2 font-medium">
                        <h3>Follow us</h3>
                    </div>
                    <ul>
                        <li className="py-1">Instagram</li>
                        <li className="py-1">Facebook</li>
                        <li className="py-1">Twitter</li>
                        <li className="py-1">Youtube</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-around pb-5">
                <div className="px-4">
                    {" "}
                    <h2>&copy; Prudvi - 2025</h2>
                </div>
                <div className="privacy">
                    <h2>
                        <ul className="flex">
                            <li className="px-4">Terms of Services</li>
                            <li className="px-4">Privacy Policy</li>
                            <li className="px-4">Refund Policy</li>
                            <li className="px-4">Accessebility Policy</li>
                        </ul>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;
