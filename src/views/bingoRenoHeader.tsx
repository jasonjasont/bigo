import React from "react";
import bigo from "./bingo-reno.png";
import './bingoRenoHeader.css'
import Papa, { ParseResult } from "papaparse"
import internal from "stream";
import { useLocation } from 'react-router-dom';  // permet de récupérer l'url de la page

export function BingoRenoHeader() {

    const location = useLocation(); // récupère l'url de la page

    const textClass = location.pathname === '/result' ? 'hide-text' : ''; // affiche pas le texte si on est sur la page de résultat

   
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
            <p className={`Header-presentation ${textClass}`}>L'outil en ligne "Bingo Réno" vous aide à prioriser les travaux de rénovation à réaliser dans votre maison. 
                L'objectif : réaliser des économies d'énergie et gagner en confort ! Cet outil simple et rapide a été développé par Grenoble Alples Métropole et l'Agence Locale pour l'Energie et le Climat (ALEC).
            </p>
        </div>
    </div>;



}