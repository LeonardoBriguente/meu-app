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