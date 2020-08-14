import React, { Component } from "react"


export  default class FormularioCadastro extends Component{
    rende(){
        return (
            <form>
                <input type="text"></input>
                <textarea placeholder="Escreva sua nota..."
                ></textarea>
                <button> Criar Nota</button> 
            </form>
        );
    }
}