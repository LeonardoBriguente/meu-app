import React from "react";

function Button({ onClick, children }) {
    return (<>
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    </>)
}

export function ToolBar() {
    return (<>
        <div className="Toolbar" onClick={() => {
            alert("Você clicou na barra de tarefas!");
        }}>
            <Button onClick={() => alert("Assistindo!")}>
                Assitir ao filme
            </Button>

            <Button onClick={() => alert("atualizando")}>
                Substituir imagem
            </Button>

        </div>
    </>)
}
