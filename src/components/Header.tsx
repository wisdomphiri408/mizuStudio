import { NextPage } from "next";
import HeaderNav from "./HeaderNav";

const Header: NextPage = () => {
    return(
        <div className="border-b  px-4 py-5 fixed top-0 left-0 right-0 backdrop-blur-2xl z-10">
            <HeaderNav />
        </div>
    )
}

export default Header;