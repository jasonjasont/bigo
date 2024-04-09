import React, { useEffect } from "react";
import {BingoRenoHeader} from "./bingoRenoHeader";
import './resultComponent.css'
import {ScenarioComponent} from "./scenarioComponent";
import {BingoRenoAdvise} from "../domain/bingoRenoAdvise";
import {Navigate, useLocation} from "react-router-dom";


export function ResultComponent() {
    
    const location = useLocation()
    if (!location.state) {
        return <Navigate to='/'></Navigate>
    }
    const advise = JSON.parse(location.state) as BingoRenoAdvise

    return <div className='Main-flex-component'>
        <BingoRenoHeader/>
        <div className='Result-content'>
            <h2>RECOMMANDATIONS DE TRAVAUX POUR MA MAISON :</h2>
            <div className='Result-list'>
                {buildScenario(advise)}
            </div>
        </div>
    </div>;

function buildScenario(advise: BingoRenoAdvise) {
    let previousScenarioWorks: any = null;
    console.log(buildScenario);
    return (
        <>
            {advise.scenario.map((s: any, index: number) => {
                if (previousScenarioWorks && JSON.stringify(s.works) === JSON.stringify(previousScenarioWorks)) {
                    return null;
                }

                previousScenarioWorks = s.works;
                return <ScenarioComponent key={index} index={index + 1} scenario={s}/>;
            })}
        </>
    );
}
}

