// import { AiOutlineSearch } from "react-icons/ai";
// import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="navbar-start"></div>
            <div className="navbar-center">
                <a className="btn-ghost btn text-xl normal-case">
                    LaminatedSquid
                </a>
            </div>
            <div className="navbar-end">
                {/* <button className="btn-ghost btn-circle btn">
                    <AiOutlineSearch size={24} />
                </button> */}
            </div>
        </div>
    );
};

export default Navbar;
