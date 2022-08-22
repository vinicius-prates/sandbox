import { NavbarContainerAdmin } from "./navbar_container/NavbarContainerAdmin";
import { NavbarContainerNonAdmin } from "./navbar_container/NavbarContainerNonAdmin";
import { BoschLine } from "../bosch_line/BoschLine";
import { getSession } from "../../session";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

  const navigate = useNavigate();
  const session = getSession();

  useEffect(() => {
    if (!session) {
      navigate("/");
    }
  }, [])

  if (session && session.perm == 'Admin') {
    return (
      <>
        <BoschLine />
        <NavbarContainerAdmin />
      </>
    );
  } else {
    return (
      <>
        <BoschLine />
        <NavbarContainerNonAdmin />
      </>
    );
  }
};
