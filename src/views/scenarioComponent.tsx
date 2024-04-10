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
                return <> C'est l'option prioritaire pour tous les logements, pour réduire significativement mes
                    factures et
                    améliorer le confort de ma maison aussi bien en hiver qu'en été</>;
            case ScenarioType.MidRange:
                return <>Si vous ne pouvez pas faire une rénovation complète en une fois, voici les travaux prioritaires
                    avec le meilleur compromis coût des travaux / économies d'énergies</>;
            case ScenarioType.SmallBudget:
                return <>Vous ne pouvez pas vous lancer dans des travaux importants ? Voilà les travaux les plus
                    pertinents pour votre maison avec un budget restreint</>;
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
                return 'RENOVATION AMBITIEUSE';
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
            <h3>Scenario {props.index}</h3>
            <div className='Scenario-type'>{displayedType()}</div>
            <div className='Scenario-price-container'>
                <div className='Scenario-price'>~ {getScenario().price.toLocaleString()}€*</div>
            </div>
        </div>
        <div className='Scenario-description'>{decriptionDisplayed()}</div>
        <div className='Scenario-separator'></div>
        <div className='Scenario-my-works'>
            <b>Mes travaux:</b>
            {getWorks()}
        </div>
        <div className='Scenario-separator'></div>
        <div className='Scenario-badges'>
            <p className='Scenario-legend Scenario-help-legend'>Niveau potentiel d'aides par rapport au montant des
                travaux**</p>
            <div className='Scenario-help-level-container'>
                <div className='Scenario-help-level'>{getHelpLevel()}</div>
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

