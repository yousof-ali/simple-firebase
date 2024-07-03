import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex justify-between items-center mx-8">
            <h1 className="text-2xl font-bold">logo</h1>
            <ul className="font-bold items-center flex gap-6">
                <Link to={"/"}>Home</Link>
                <Link to={"/product"}>Product</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/login"}><button className="btn bg-gray-200 p-2 rounded">Login</button></Link>
            </ul>
        </div>
    );
};

export default Header;