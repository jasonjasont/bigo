import { ScenarioType } from "./scenarioType";
import { HelpLevel } from "./helpLevel";
import React, { useEffect } from 'react';
import { match } from "assert";

export class Scenario {
    constructor(
        public readonly type: ScenarioType,
        public readonly price: Number,
        public readonly works: Array<string>,
        public readonly lowerPayment: Number,
        public readonly improveWinterConfort: Number,
        public readonly improveSummerConfort: Number
    ) {

    }

}



export class BingoRenoAdvise {


    public readonly scenario: Scenario[];

    constructor() {
        let matchingObjects = this.importobj();
        console.log(matchingObjects[0]["SC 1"])


        this.scenario = [];
        //Ordre des scénario + montage
    

        this.addScenario(new Scenario(
            ScenarioType.SmallBudget,
            matchingObjects[0]['__12'].toLocaleString('fr-FR'),
            [
                matchingObjects[0]['SC 1'],
                matchingObjects[0]['__10'],
                matchingObjects[0]['__11']
            ].filter(Boolean), // Filtrer les valeurs vides

            Math.ceil(matchingObjects[0]['__14'] / 2),
            Math.ceil(matchingObjects[0]['__15'] / 2),
            Math.ceil(matchingObjects[0]['__16'] / 2),
        ));

        this.addScenario(new Scenario(
            ScenarioType.MidRange,
            matchingObjects[0]['__21'],
            [
                matchingObjects[0]['SC 1'],
                matchingObjects[0]['__18'],
                matchingObjects[0]['__19'],
                matchingObjects[0]['__20'],
            ].filter(Boolean), // Filtrer les valeurs vides

            Math.ceil(matchingObjects[0]['__23'] / 2),
            Math.ceil(matchingObjects[0]['__24'] / 2),
            Math.ceil(matchingObjects[0]['__25'] / 2)
        ));

        

        this.addScenario(new Scenario(
            ScenarioType.Ambitious,
            matchingObjects[0]['__32'],
            [
                matchingObjects[0]["SC 1"],
                matchingObjects[0]['__27'],
                matchingObjects[0]['__28'],
                matchingObjects[0]['__29'],
                matchingObjects[0]['__30'],
                matchingObjects[0]['__31'],
            ].filter(Boolean), // Filtrer les valeurs vides

            Math.ceil(matchingObjects[0]['__34'] / 2),
            Math.ceil(matchingObjects[0]['__35'] / 2),
            Math.ceil(matchingObjects[0]['__36'] / 2),
        ));

        /*
        this.scenario = [

            new Scenario(
                ScenarioType.Ambitious,
                matchingObjects[0]['__32'],
                [
                    matchingObjects[0]["SC 1"],
                    matchingObjects[0]['__27'],
                    matchingObjects[0]['__28'],
                    matchingObjects[0]['__29'],
                    matchingObjects[0]['__30'],
                    matchingObjects[0]['__31'],
                ].filter(Boolean), // Filtrer les valeurs vides

                Math.ceil(matchingObjects[0]['__34'] / 2),
                Math.ceil(matchingObjects[0]['__35'] / 2),
                Math.ceil(matchingObjects[0]['__36'] / 2),
            ),

            new Scenario(
                ScenarioType.MidRange,
                matchingObjects[0]['__21'],
                [
                    matchingObjects[0]['SC 1'],
                    matchingObjects[0]['__18'],
                    matchingObjects[0]['__19'],
                    matchingObjects[0]['__20'],
                ].filter(Boolean), // Filtrer les valeurs vides

                Math.ceil(matchingObjects[0]['__23'] / 2),
                Math.ceil(matchingObjects[0]['__24'] / 2),
                Math.ceil(matchingObjects[0]['__25'] / 2),
            ),

            new Scenario(
                ScenarioType.SmallBudget,
                matchingObjects[0]['__12'],
                [
                    matchingObjects[0]['SC 1'],
                    matchingObjects[0]['__10'],
                    matchingObjects[0]['__11']
                ].filter(Boolean), // Filtrer les valeurs vides

                Math.ceil(matchingObjects[0]['__14'] / 2),
                Math.ceil(matchingObjects[0]['__15'] / 2),
                Math.ceil(matchingObjects[0]['__16'] / 2),
            ),


            

        ]*/


    }
    importobj() {
        if (typeof localStorage !== 'undefined') {
            let matchingObjects = JSON.parse(localStorage.getItem('matchingObjects') || '[]');
            console.log("arriver advise")
            console.log(matchingObjects);
            return matchingObjects;
        }
        return [];
    }

    addScenario(scenario: Scenario) {
        const isDuplicate = this.scenario.some(existingScenario =>
            existingScenario.type === scenario.type &&
            existingScenario.price === scenario.price &&
            existingScenario.works.every((work, index) => work === scenario.works[index]) &&
            existingScenario.lowerPayment === scenario.lowerPayment &&
            existingScenario.improveWinterConfort === scenario.improveWinterConfort &&
            existingScenario.improveSummerConfort === scenario.improveSummerConfort
        );

        if (!isDuplicate) {
            this.scenario.push(scenario);
        }
    }

}





