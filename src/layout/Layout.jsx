import { Outlet } from "react-router";
import Header from "../components/sections/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default Layout;