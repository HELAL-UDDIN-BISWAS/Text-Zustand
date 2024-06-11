import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="m-5">
            <ul className=" flex gap-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Product</Link></li>
                <li><Link to="/teststore">teststore</Link></li>
            </ul>
            <hr></hr>
        </div>
    );
};

export default Navbar;