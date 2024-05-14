import { Gallery } from "./components/atividade3/topico1-1"; //Quando foi colocado o <Gallery/> automaticamente me foi retornado isso com {}, e gera um erro quando não é retirado as chaves
import { Profile } from "./components/atividade3/topico1-1";

export default function Atividade3() {
    const text = "Valor passado com chaves";

    return (<>
        <h2>Tópico 1.1: Seu primeiro Componente</h2>
        <Gallery />

        <h2>Tópico 1.2: Importando e exportando componentes</h2>
        <Profile />

        <h2>Tópico 1.3: Escrevendo marcações com JSX</h2>
        <p>Aprendendo sobre marcações</p>
        <p style={{ backgroundColor: 'lightblue', width: '200px' }}>Sobre o camelCase usando style</p>

        <h2>Tópico 1.4: JavaScript em JSX com chaves</h2>

    </>)
}