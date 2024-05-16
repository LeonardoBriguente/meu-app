import {BrowserRouter, Route, Routes} from "react-router-dom";

import Atividade1 from "./atividade1";
import Home from "./home";
import Atividade2 from "./atividade2";
import Atividade3 from "./atividade3";
import Atividade4 from "./atividade4";

export default function MyRoutes(){
    return(<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/atividade1" element={<Atividade1/>}/>
                <Route path="/atividade2" element={<Atividade2/>}/>
                <Route path="/atividade3" element={<Atividade3/>}/>
                <Route path="/atividade4" element={<Atividade4/>}/>


            </Routes>
        </BrowserRouter>
    </>)
}