import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Signin from "./Signin";
import Signup from "./Signup";
import Contact from "./Contact";
import ErrorComponent from "./ErrorComponent";

export default function AllRoutes() {
    return <>
    <Routes>

        <Route path="/" element={ <Homepage />} />
        <Route path="/signin" element={ <Signin />} />
        <Route path="/signup" element={ <Signup />}  />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/:error" element={ <ErrorComponent />} />
 
    </Routes>
    </>
}