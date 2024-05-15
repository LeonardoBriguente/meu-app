import TypingSign from "./components/letreiro";
import { Relogio } from "./components/relogio";
import { Link } from "react-router-dom";


export default function Atividade1() {
    return (<>
        <Relogio />
        <TypingSign />

        <Link to="/">Home Page</Link>

    </>)
}
