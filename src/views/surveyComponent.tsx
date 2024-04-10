import React, { useEffect, useState } from "react";
import './surveyComponent.css';
import { BingoRenoHeader } from "./bingoRenoHeader";
import { Built } from "../domain/built";
import { WorksDone } from "../domain/worksDone";
import { AtticAmenagment } from "../domain/atticAmenagment";
import { BingoRenoAdvise } from "../domain/bingoRenoAdvise";
import { useNavigate } from "react-router-dom";







export function SurveyComponent() {


    const navigate = useNavigate();

    const [_built, setBuilt] = useState(Built.Unknown)
    const [_worksDone, setWorkDone] = useState(new Array<WorksDone>())
    const [_atticAmenagment, setAtticAmenagment] = useState(AtticAmenagment.Unknown)

    const [data, setData] = useState([]);






    function canCalculate() {
        return _built !== Built.Unknown && _worksDone.length > 0 && _atticAmenagment !== AtticAmenagment.Unknown;
    }

    return (<div className="Main-flex-component">
        <BingoRenoHeader />
        <div className='Survey'>
            <h3>Quelle est la période de construction de votre maison ?<span className="red-star">*</span></h3>
            <div className='Survey-choice'>
                <button
                    className={'Radio-button ' + isBuiltChecked(Built.Before1945)}
                    onClick={onBuiltRadioClick(Built.Before1945)}
                >Avant 1945
                </button>
                <button
                    className={'Radio-button ' + isBuiltChecked(Built.Between1945and1980)}
                    onClick={onBuiltRadioClick(Built.Between1945and1980)}
                >1945-1980
                </button>
                <button
                    className={'Radio-button ' + isBuiltChecked(Built.Between1980and2000)}
                    onClick={onBuiltRadioClick(Built.Between1980and2000)}>1980-2000
                </button>
                <button
                    className={'Radio-button ' + isBuiltChecked(Built.After2000)}
                    onClick={onBuiltRadioClick(Built.After2000)}>Après 2000
                </button>
            </div>
            <div className='Survey-separator'></div>
            <h3>2. Quels travaux avez-vous déjà effectués ces 20 dernières années (plusieurs réponses possibles)?<span className="red-star">*</span></h3>
            <div className='Survey-choice'>
                <button
                    className={'Radio-button ' + isWorksSelected(WorksDone.None)}
                    onClick={onWorksDoneClick(WorksDone.None)}
                >Aucun travaux
                </button>
                <button
                    className={'Radio-button ' + isWorksSelected(WorksDone.RoofIsolation)}
                    onClick={onWorksDoneClick(WorksDone.RoofIsolation)}
                >Isolation du toit
                </button>
                <button
                    className={'Radio-button ' + isWorksSelected(WorksDone.FloorIsolation)}
                    onClick={onWorksDoneClick(WorksDone.FloorIsolation)}
                >Isolation du sol
                </button>

                <button
                    className={'Radio-button ' + isWorksSelected(WorksDone.WallInternalIsolation)}
                    onClick={onWorksDoneClick(WorksDone.WallInternalIsolation)}
                >Isolation des murs par l'intérieur
                </button>
                <button
                    className={'Radio-button ' + isWorksSelected(WorksDone.WindowIsolation)}
                    onClick={onWorksDoneClick(WorksDone.WindowIsolation)}
                >Installation de fenêtres en double ou triple vitrage
                </button>
                <button
                    className={'Radio-button ' + isWorksSelected(WorksDone.CentralHeatingChange)}
                    onClick={onWorksDoneClick(WorksDone.CentralHeatingChange)}
                >Changement du système de chauffage central
                </button>
                <button
                    className={'Radio-button ' + isWorksSelected(WorksDone.WoodBurnerChange)}
                    onClick={onWorksDoneClick(WorksDone.WoodBurnerChange)}
                >Installation ou changement d'un poêle ou d'un insert de cheminée
                </button>
                <button
                    className={'Radio-button ' + isWorksSelected(WorksDone.ChauffeEau)}
                    onClick={onWorksDoneClick(WorksDone.ChauffeEau)}
                >Installation ou changement d'un chauffe-eau
                </button>
                <button
                    className={'Radio-button ' + isWorksSelected(WorksDone.PanneauSolaire)}
                    onClick={onWorksDoneClick(WorksDone.PanneauSolaire)}
                >Installation d'un système de panneaux solaires
                </button>
                <button
                    className={'Radio-button ' + isWorksSelected(WorksDone.InstallOrChangeVMC)}
                    onClick={onWorksDoneClick(WorksDone.InstallOrChangeVMC)}
                >Installation ou changement d'un système de ventilation
                </button>

            </div>
            <div className='Survey-separator'></div>
            <h3>3.</h3>
            <div className='Survey-choice'>
                <button
                    className={'Radio-button ' + isAtticSelected(AtticAmenagment.Converted)}
                    onClick={onAtticClick(AtticAmenagment.Converted)}
                ><img className="small-image" src="./combleok.png" alt="Combles aménagés" />
                </button>
                <button
                    className={'Radio-button ' + isAtticSelected(AtticAmenagment.NotConverted)}
                    onClick={onAtticClick(AtticAmenagment.NotConverted)}
                ><img className="small-image" src="./Bingo-picto combles non amenages.png" alt="Combles non aménagés" />
                </button>
                
            </div>
            
            
            <div className='Survey-separator'></div>
            <p><span className="red-star">*</span>Champs obligatoire</p>
            <div className="Survey-command">
                <button className="Action-Button"
                    onClick={calculate(_built, _atticAmenagment)}
                    disabled={!canCalculate()}>C'est parti !
                </button>

                

                
            </div>
        </div>
        
    </div>);

    // Cette fonction est appelée lorsque l'utilisateur clique sur un bouton correspondant à une période de construction.
    // Elle met à jour l'état `_built` pour correspondre à la période de construction sélectionnée.


    function onBuiltRadioClick(built: Built) {
        return () => {
            setBuilt(built);
            let filteredData;
            switch (built) {
                case Built.Before1945:
                    filteredData = data.filter(item => item["QUESTIONS POSEES"] === "Avant 80");
                    break;
                case Built.Between1945and1980:
                    filteredData = data.filter(item => item["QUESTIONS POSEES"] === "Avant 80");
                    break;
                case Built.Between1980and2000:
                    filteredData = data.filter(item => item["QUESTIONS POSEES"] === "80 - 2000");
                    break;
                case Built.After2000:
                    filteredData = data.filter(item => item["QUESTIONS POSEES"] === "Apres 2000");
                    break;
                default:
                    filteredData = data;
            }
            


        };
    }

    // Cette fonction vérifie si une période de construction spécifique est égale à l'état `_built`.
    // Si c'est le cas, elle renvoie la chaîne 'Radio-button-checked', sinon elle renvoie une chaîne vide.
    function isBuiltChecked(built: Built) {
        return _built === built ? 'Radio-button-checked' : '';
    }

    // Cette fonction vérifie si un travail spécifique est inclus dans l'état `_worksDone`.
    // Si c'est le cas, elle renvoie la chaîne 'Radio-button-checked', sinon elle renvoie une chaîne vide.
    function isWorksSelected(work: WorksDone) {
        return _worksDone.includes(work) ? 'Radio-button-checked' : '';
    }

    // Cette fonction est appelée lorsque l'utilisateur clique sur un bouton correspondant à un travail spécifique.
    // Si le travail est déjà inclus dans `_worksDone`, il est retiré. Sinon, il est ajouté à `_worksDone`.
    function onWorksDoneClick(work: WorksDone) {

        return (e: React.MouseEvent<HTMLButtonElement>) => {
            let newWorksDone: any;
            if (_worksDone.includes(work)) {
                newWorksDone = _worksDone.filter(w => w !== work);
            } else {
                newWorksDone = _worksDone.concat(work);
            }
            setWorkDone(newWorksDone);



        };
    }

    // Cette fonction vérifie si un aménagement de grenier spécifique est égal à l'état `_atticAmenagment`.
    // Si c'est le cas, elle renvoie la chaîne 'Radio-button-checked', sinon elle renvoie une chaîne vide.
    function isAtticSelected(attic: AtticAmenagment) {
        return _atticAmenagment === attic ? 'Radio-button-checked' : '';
    }

    // Cette fonction est appelée lorsque l'utilisateur clique sur un bouton correspondant à un aménagement de grenier spécifique.
    // L'état `_atticAmenagment` est mis à jour pour correspondre à l'aménagement de grenier sélectionné.
    function onAtticClick(attic: AtticAmenagment) {
        return (e: React.MouseEvent<HTMLButtonElement>) => {
            setAtticAmenagment(attic)
        }
    }

    // Cette fonction est appelée lorsque l'utilisateur clique sur le bouton pour calculer le résultat.
    // Elle navigue vers la page '/result' et passe un nouvel objet `BingoRenoAdvise` comme état.
    function calculate(built: Built, atticAmenagment: AtticAmenagment) {
        return () => {
            let newWorksDone = [];

            if (_worksDone.includes(WorksDone.RoofIsolation)) {
                newWorksDone.push(WorksDone.RoofIsolation);
            } else {
                newWorksDone.push('');
            }

            if (_worksDone.includes(WorksDone.WindowIsolation)) {
                newWorksDone.push(WorksDone.WindowIsolation);
            } else {
                newWorksDone.push('');
            }

            if (_worksDone.includes(WorksDone.WallInternalIsolation)) {
                newWorksDone.push(WorksDone.WallInternalIsolation);
            } else {
                newWorksDone.push('');
            }

            if (_worksDone.includes(WorksDone.FloorIsolation)) {
                newWorksDone.push(WorksDone.FloorIsolation);
            } else {
                newWorksDone.push('');
            }

            if (_worksDone.includes(WorksDone.CentralHeatingChange)) {
                newWorksDone.push(WorksDone.CentralHeatingChange);
            } else {
                newWorksDone.push('');
            }

            if (_worksDone.includes(WorksDone.WoodBurnerChange)) {
                newWorksDone.push(WorksDone.WoodBurnerChange);
            } else {
                newWorksDone.push('');
            }

            // chauffe eau 
            if (_worksDone.includes(WorksDone.ChauffeEau)) {
                newWorksDone.push(WorksDone.ChauffeEau);
            } else {
                newWorksDone.push('');
            }

            // panneaux solaire
            if (_worksDone.includes(WorksDone.PanneauSolaire)) {
                newWorksDone.push(WorksDone.PanneauSolaire);
            } else {
                newWorksDone.push('');
            }

            // vmc
            if (_worksDone.includes(WorksDone.InstallOrChangeVMC)) {
                newWorksDone.push(WorksDone.InstallOrChangeVMC);
            } else {
                newWorksDone.push('');
            }




            console.log(newWorksDone);

            let binaryList = newWorksDone.map(work => work === '' ? 0 : 1);

            console.log(binaryList);

            let binaryObject: Record<string, number> = binaryList.reduce((obj: Record<string, number>, value, index) => {
                obj[`__${index}`] = value;
                return obj;
            }, {} as Record<string, number>);

            let binaryObjectJson = JSON.stringify(binaryObject);

            console.log(binaryObjectJson);

            let matchingObjects: any[] = [];

            fetch(`${process.env.PUBLIC_URL}/data.json`)
                .then(response => response.json())
                .then(jsonData => {
                    jsonData.forEach((obj: any) => {
                        let keys = Object.keys(binaryObject);
                        if (keys.every((key, index) => {
                            return obj.hasOwnProperty(key) && obj[key] === binaryObject[key];
                        })) {
                            matchingObjects.push(obj);
                        }
                    });
                    
                    

                    switch (built) {
                        case Built.Before1945:
                            matchingObjects = matchingObjects.filter(item => item["QUESTIONS POSEES"] === "Avant 80");
                            break;
                        case Built.Between1945and1980:
                            matchingObjects = matchingObjects.filter(item => item["QUESTIONS POSEES"] === "Avant 80");
                            break;
                        case Built.Between1980and2000:
                            matchingObjects = matchingObjects.filter(item => item["QUESTIONS POSEES"] === "80 - 2000");
                            break;
                        case Built.After2000:
                            matchingObjects = matchingObjects.filter(item => item["QUESTIONS POSEES"] === "Apres 2000");
                            break;
                        default:
                            break;
                    }

                    switch (atticAmenagment) {
                        case AtticAmenagment.Converted:
                            matchingObjects = matchingObjects.filter(item => item["__9"] === "Combles");
                            break;

                        case AtticAmenagment.NotConverted:
                            matchingObjects = matchingObjects.filter(item => item["__9"] === "Rampants");
                            break;
                        default:
                            break;
                    }

                    matchingObjects = matchingObjects.filter(item => item["__13"] !== "#DIV/0!");

                    console.log(matchingObjects);
                    localStorage.setItem('matchingObjects', JSON.stringify(matchingObjects));
                });


            navigate('/result', { state: JSON.stringify(new BingoRenoAdvise()) });
        }
    }



}

