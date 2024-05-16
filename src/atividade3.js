import { Link } from "react-router-dom";
import { Profile, Topico3, Topico4, Topico5, Topico6, Topico7, Topico8 } from "./components/atividade3/allComponents";
import Gallery from "./components/atividade3/allComponents";

export default function Atividade3() {
    const text = "Valor passado com chaves";

    return (<>
        <h2>Tópico 1.1: Seu primeiro Componente</h2>
        <Gallery />

        <h2>Tópico 1.2: Importando e exportando componentes</h2>
        <Profile />

        <h2>Tópico 1.3: Escrevendo marcações com JSX</h2>
        <Topico3 />

        <h2>Tópico 1.4: JavaScript em JSX com chaves</h2>
        <Topico4 />

        <h2>Tópico 1.5: Passando props para um componente</h2>
        <Topico5 />
        {/* Solocitar ajuda. */}

        <h2>Tópico 1.6: Renderização condicional</h2>
        <Topico6 />

        <h2>Tópico 1.7: Listas de Renderização</h2>
        <Topico7 />

        <h2>Tópico 1.8: Mantendo componentes puros</h2>
        <Topico8 />

        <Link to="/">Home Page</Link>
    </>)
}