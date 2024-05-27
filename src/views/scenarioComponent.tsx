import React from "react";
import './scenarioComponent.css'
import { ScenarioType } from "../domain/scenarioType";
import { StarsComponent } from "./starsComponent";
import { Scenario } from "../domain/bingoRenoAdvise";
import { HelpLevel } from "../domain/helpLevel";
import image1 from '../Bingo-visuel scenario 1.svg';
// Page proposition de scénarios
interface ScenarioProperties {
    index: number;
    scenario: Scenario
}

export function ScenarioComponent(props: ScenarioProperties) {

    function getWorks() {
        return <ul>
            {getScenario().works.map((w, index) => <li key={index}>{w}</li>)}
        </ul>;
    }

    function decriptionDisplayed() {
        switch (getScenario().type) {
            case ScenarioType.Ambitious:
                return <> C'est le scénario le plus complet, à prioriser si vous pouvez le financer. Il vous permettra de gagner considérablement en confort et en économies d'énergie.</>;
            case ScenarioType.MidRange:
                return <>Vous ne pouvez pas vous lancer dans une rénovation complète en une fois ? Voici les travaux préconisés, avec le meilleur compromis coût / économies d'énergie.</>;
            case ScenarioType.SmallBudget:
                return <>Vous ne pouvez pas vous lancer dans des travaux importants ? Voici les travaux les plus pertinents pour votre maison, pour un budget réduit.</>;
            default:
                throw new Error(`Unknown type : ${getScenario().type}`)
        }
    }

    function getScenario() {
        return props.scenario;
    }

function getScenarioImage() {
        switch (props.scenario.type) {
            case ScenarioType.Ambitious:
                return image1;
            default:
                return null;
        }
    }
    function displayedType() {
        switch (getScenario().type) {
            case ScenarioType.Ambitious:
                return 'RÉNOVATION AMBITIEUSE';
            case ScenarioType.MidRange:
                return 'INTERMÉDIAIRE';
            case ScenarioType.SmallBudget:
                return 'BUDGET RESTREINT';
            default:
                throw new Error(`Unknown type : ${getScenario().type}`)
        }
    }

    function getHelpLevel() {
        const matchingObjects = JSON.parse(localStorage.getItem('matchingObjects') || '[]');
        console.log(matchingObjects[0]['__13'] + ' ' + matchingObjects[0]['__22'] + ' ' + matchingObjects[0]['__33'])
        //const helpLevel = getScenario().helpLevel;

        const helpLevel1 = matchingObjects[0]['__13'];
        const helpLevel2 = matchingObjects[0]['__22'];
        const helpLevel3 = matchingObjects[0]['__33'];

        let result;

        if (props.index === 1) {
            switch (helpLevel1) {
                case 'Important':
                    result = 'Important';
                    break;
                case 'Intermédiaire':
                    result = 'Modéré';
                    break;
                case 'Modéré':
                    result = 'Faible';
                    break;
                default:
                    result = 'Non défini';
            }
        }
        if (props.index === 2) {
            switch (helpLevel2) {
                case 'Important':
                    result = 'Important';
                    break;
                case 'Intermédiaire':
                    result = 'Modéré';
                    break;
                case 'Modéré':
                    result = 'Faible';
                    break;
                default:
                    result = 'Non défini';
            }
        }

        if (props.index === 3) {

            switch (helpLevel3) {
                case 'Important':
                    result = 'Important';
                    break;
                case 'Intermédiaire':
                    result = 'Modéré';
                    break;
                case 'Modéré':
                    result = 'Faible';
                    break;
                default:
                    result = 'Non défini';
            }
        }

        // Combinez ou utilisez result1, result2 et result3 comme vous le souhaitez
        // Par exemple, vous pouvez les retourner dans un tableau :
        return [result];

        /*switch (helpLevel) {
            case HelpLevel.Important:
                return 'Important'
            case HelpLevel.Intermédiaire:
                return 'Modéré'
            case HelpLevel.Modéré:
                return 'Faible'
            default:
                console.log(getScenario())
                //throw new Error(`Unknown HelpLevel ${helpLevel}`)
        }*/
    }
 console.log(image1)
 
    return (<div className="Scenario">
        <div className='Scenario-header'>
        <div className="Scenario-illustration" style={{ backgroundImage: `url(${getScenarioImage()})` }}></div>
            <h3>Scénario {props.index}</h3>
            <div className='Scenario-type'>{displayedType()}</div>
            <div className='Scenario-price-container'>
                <div className='Scenario-price'>Env. {getScenario().price.toLocaleString()}€*</div>
            </div>
        </div>
        <div className='Scenario-description'>{decriptionDisplayed()}</div>
        <div className='Scenario-separator'></div>
        <div className='Scenario-my-works'>
            <b>Travaux à réaliser pour ce scénario :</b>
            {getWorks()}
        </div>
        <div className='Scenario-separator'></div>
        <div className='Scenario-badges'>
           
            <div className='Scenario-help-level-container'>
                <h4>Gains pour votre maison : </h4>
               
            </div>
            <p className='Scenario-legend Scenario-star-legend'>Baisse des factures :</p>
            <StarsComponent level={getScenario().lowerPayment} />
            <p className='Scenario-legend Scenario-star-legend'>Amélioration du confort d'hiver :</p>
            <StarsComponent level={getScenario().improveWinterConfort} />
            <p className='Scenario-legend Scenario-star-legend'>Amélioration du confort d'été :</p>
            <StarsComponent level={getScenario().improveSummerConfort} />
            
        </div>
        
    </div>)
    
}

