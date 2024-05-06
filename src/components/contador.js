import React, { useState } from "react";
import homemImg from './homem.png';
import mulherImg from './mulher.png';
import resetBtnImg from './reset-btn.png';


export function Contador() {
  const [qtdHomem, setQtdHomem] = useState(0);
  const [qtdMulher, setQtdMulher] = useState(0);

  const aumentarHomem = () => {
    setQtdHomem(qtdHomem + 1);
  };

  const retirarHomem = () => {
    if (qtdHomem > 0) {
      setQtdHomem(qtdHomem - 1);
    }
  };

  const aumentarMulher = () => {
    setQtdMulher(qtdMulher + 1);
  };

  const retirarMulher = () => {
    if (qtdMulher > 0) {
      setQtdMulher(qtdMulher - 1);
    }
  };

  const totalPessoas = qtdHomem + qtdMulher;

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "40em", height: "43em", border: "1px solid black" }}>
        <div style={{ width: "20em", height: "3em", display: "flex", flexDirection: "column", alignItems: "flex-end", float: "left" }}>
          <h2 style={{ margin: "10px 0 0 0" }}>Total</h2>
          <p style={{ padding: "10px 20px", border: "1px solid black" }}>{totalPessoas}</p>
        </div>
        <img src={resetBtnImg} alt="Reset" style={{ width: "3rem", height: "3em", margin: "2.5rem 0 0 4rem", clear: "both" }} onClick={() => { setQtdHomem(0); setQtdMulher(0); }} />
        <div style={{ width: "30em", height: "25em", margin: "3rem 0 0 5em", display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
          <div style={{ gridColumn: "span 1" }}>
            <img src={homemImg} alt="Homem" style={{ width: "7rem", height: "auto", marginLeft: "3em" }} />
            <p style={{ width: "16px", margin: "16px 0 2px 1em", border: "1px solid black", backgroundColor: "green", textAlign: "center" }} onClick={aumentarHomem}>+</p>
            <p style={{ width: "16px", margin: "16px 0 2px 1em", border: "1px solid black", backgroundColor: "red", textAlign: "center" }} onClick={retirarHomem}>-</p>
            <p style={{ width: "1em", padding: "10px 20px", border: "1px solid black" }}>{qtdHomem}</p>
          </div>
          <div style={{ gridColumn: "span 1" }}>
            <img src={mulherImg} alt="Mulher" style={{ width: "7rem", height: "auto", marginLeft: "3em" }} />
            <p style={{ width: "16px", margin: "16px 0 2px 1em", border: "1px solid black", backgroundColor: "green", textAlign: "center" }} onClick={aumentarMulher}>+</p>
            <p style={{ width: "16px", margin: "16px 0 2px 1em", border: "1px solid black", backgroundColor: "red", textAlign: "center" }} onClick={retirarMulher}>-</p>
            <p style={{ width: "1em", padding: "10px 20px", border: "1px solid black" }}>{qtdMulher}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
