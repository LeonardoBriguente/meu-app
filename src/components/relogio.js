import React, { useState, useEffect } from "react";

export function Relogio() {
    const [relogio, setRelogio] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const tempo = new Date();
            const horaFormatada = tempo.toLocaleTimeString();
            setRelogio(horaFormatada);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const dataAtual = new Date();
    const data = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    const dataFormatada = dataAtual.toLocaleDateString("pt-BR", data);

    return (
        <>
            <p id="data">{dataFormatada}</p>
            <p id="relogio">{relogio}</p>
        </>
    );
}
