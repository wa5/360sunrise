import { connect } from "react-redux";
import Navbar1 from "../compnent/Navbar1";

interface IownProps{}

export const NavbarContiner:React.ComponentType<IownProps>=connect()(Navbar1)