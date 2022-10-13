import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../components/sections/Header";

const Layout = () => {
    let location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [location])
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default Layout;