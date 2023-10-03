import { Outlet } from "react-router-dom";
import StyledNavbar from "../components/StyledNavbar";

export default function SharedLayout() {
    return (
        <>
            <StyledNavbar />
            <Outlet />
        </>
    );
}
