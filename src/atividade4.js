import React from "react";
import { Link } from "react-router-dom";
import { ToolBar } from "./components/atividade4/allComponents4";


export default function Atividade4() {
    return (<>
        <h2>Toolbar</h2>
        <ToolBar />
        
        <Link to="/">HOME PAGE</Link>
    </>)
}