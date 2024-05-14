import React from "react";
import guaxinim from "./guaxinim.jpg";

export function Profile() {
    return (<>
        <img src={guaxinim} alt="guaxinim na árvore" style={{marginRight: '10px'}}/>
    </>);
}

export function Gallery() { //Local de criação influencia?? Tópico 1.1.5 IMPORTANTE...
    return (<>
        <section>
            <Profile />
            <Profile />
            <Profile />
        </section>
    </>);
}