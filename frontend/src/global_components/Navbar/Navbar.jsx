import { NavbarContainerAdmin } from "./navbar_container/NavbarContainerAdmin";
import { NavbarContainerNonAdmin } from "./navbar_container/NavbarContainerNonAdmin";
import { BoschLine } from "../bosch_line/BoschLine";

export const Navbar = (props) => {
  if (props.admin) {
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
