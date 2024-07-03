import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex justify-between mx-8">
            <h1 className="text-2xl font-bold">logo</h1>
            <ul className="font-bold flex gap-6">
                <Link to={"/"}>Home</Link>
                <Link to={"/product"}>Product</Link>
                <Link to={"/about"}>About</Link>
            </ul>
        </div>
    );
};

export default Header;