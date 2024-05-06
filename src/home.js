import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (<>
        {/* Put routes and create file "my routes" where will be all  */}
        <h2>Home Page</h2>
        <nav>
            <ul>
                <li>
                    <Link to="/atividade1">Atividade 1</Link>
                </li>
                <li>
                    <Link to="/atividade2">Atividade 2</Link>
                </li>
            </ul>
        </nav>
        {/* <Atividade1/> */}
    </>)
}