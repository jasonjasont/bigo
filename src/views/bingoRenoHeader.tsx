import React from "react";
import bigo from "./bingo-reno.png";
import './bingoRenoHeader.css'
import Papa, { ParseResult } from "papaparse"
import internal from "stream";

export function BingoRenoHeader() {



   
        React.useEffect(() => {
            fetch('/t.txt')
              .then(response => response.text())
              .then(data => {
                console.log(data);
              });
          }, []);

    
    return <div className="Header-bingo">
        <div className="Header-logo-wrapper">
            <img className="Header-logo" src={bigo}/>
        </div>
        <div className="Header-presentation">
            <h2>Des conseils de rénovation personnalisés pour votre maison en 3 clics !</h2>
            <p>Le Bingo Réno est un outil développé par la Métropole et l'ALEC. Il vous permet, en répondant à
                quelques questions simples sur votre maison, de connaître les priorités de travaux pour votre
                maison.</p>
        </div>
    </div>;



}