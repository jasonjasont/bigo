import React from "react";
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
        return <>
            {advise.scenario.map((s, index) => <ScenarioComponent key={index}
                index={index + 1}
                scenario={s}/>)}
        </>;
    }

}

