import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Signin from "./Signin";
import Signup from "./Signup";
import Contact from "./Contact";
import ErrorComponent from "./ErrorComponent";
import NotesForm from "./NotesForm";
import Notespage from "../pages/Notespage";

export default function AllRoutes({data}) {
    
    return <>
    <Routes>

        <Route path="/" element={ <Homepage data = { data }/>} />
        <Route path="/signin" element={ <Signin data = {data}/>} />
        <Route path="/signup" element={ <Signup data = {data}/>}  />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/notes/add" element={ <NotesForm data ={data}/>} />
        <Route path="/notes/:notesId" element={ <Notespage data ={data}/>} />
       
        <Route path="/:error" element={ <ErrorComponent />} />
 
    </Routes>
    </>
}