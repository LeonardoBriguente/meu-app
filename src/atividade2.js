import { Link } from "react-router-dom";
import { Contador } from "./components/contador";

export default function Atividade2(){
    return(<>
    {/* <h1>entrou</h1> */}
    <Contador/>

    <Link to="/">Home Page</Link>

    </>)
}