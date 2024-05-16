import React from "react";


export function Profile() {
    return (<>
        <img src="https://media1.tenor.com/m/YUIN8n9bz9QAAAAd/raccoon-dancing-raccon.gif" alt="guaxinim na árvore" style={{ marginRight: '10px', width: "9em" }} />
    </>);
}

export default function Gallery() { //Local de criação influencia?? Tópico 1.1.5 IMPORTANTE...
    return (<>
        <section>
            <Profile />
            <Profile />
            <Profile />
        </section>
    </>);
}

export function Topico3() {
    return (<>
        <p>Aprendendo sobre marcações</p>
        <p style={{ backgroundColor: 'lightblue', width: '200px' }}>Sobre o camelCase usando style</p>
    </>)
}

export function Topico4() {
    const name = "React";
    const obj = { name: "objeto", cor: { color: 'pink' } };

    const today = new Date();

    function formatDate(date) {
        return new Intl.DateTimeFormat(
            'en-US',
            { weekday: 'long' }
        ).format(date);
    }

    return (<>
        <p>Palavra-chave do tópico: {name}</p>
        <p>Utilização de chaves para dinamismo no {name}</p>

        <p>O dia de hoje é: {formatDate(today)}</p>
        <p style={{ color: "green" }}>Uso do double curlies</p>
        <p >Usando {obj.name}</p>
        {/* Erro style={{obj.cor}} */}
    </>)
}

export function Topico5() {
    return (<>
        <Profile />
    </>)
}

function Item({ name, isPacked }) {
    return (
        <li className="item">
            {isPacked ? (
                <del>
                    {name + ' ✅'}
                </del>
            ) : (
                name
            )}
        </li>
    );
}

export function Topico6() {
    return (<>
        <section>
            <h3>Mercadinho do seu Sérgio</h3>
            <ul>
                <Item
                    isPacked={true}
                    name="Picles"
                />
                <Item
                    isPacked={true}
                    name="Banana"
                />
                <Item
                    isPacked={false}
                    name="Halls"
                />
            </ul>
        </section>
    </>)
}

const people = [{ id: 0, name: 'Douglas Matheus', profession: 'Programador', },
{ id: 1, name: 'Paulo Roberto', profession: 'Matemático', },
{ id: 2, name: 'Geni dos Santos', profession: 'Cientista', },
{ id: 3, name: 'Lucas Taxila', profession: 'Lutador', },
{ id: 4, name: 'Donavam Duncan', profession: 'Programador', }];


export function Topico7() {
    const chemists = people.filter(person => person.profession === 'Programador');
    const listItems = chemists.map(person =>
        <li>
            <p>
                <b>{person.name}:</b> {person.profession}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>;

}

function Receita({ drinkers }){
    return ( 
    <ol> <li>Ferva {drinkers} xícaras de água.</li>
    <li>Adicione {drinkers} colheres de chá e {0.5 * drinkers} colheres de açúcar.</li>
    <li>Adicione {0.5 * drinkers} xícaras de leite para ferver e açúcar ao gosto.</li>
    </ol> )
}

export function Topico8(){

    return(<>
    <h2>Receita bebida para dias desesperadores</h2>
    <h3>Para 2 pessoas</h3>
    <Receita drinkers={2}/>

    <h3>Em caso de reunião de desesperados</h3>
    <Receita drinkers={6}/>
    </>)
}