import Papa, { ParseResult } from "papaparse";
import React from 'react';

export type Data = {
    "Periode": string,
    "Isolation du toit": number,
    "Changement des fenêtres": number,
    "Isolation des murs": number,
    "Isolation du sol": number,
    "Changement du système de chauffage principal": number,
    "Installation ou remplacement d'un poêle": number,
    "Installation d'un chauffe-eau, solaire ou thermodynamique": number,
    "Installation de panneaux solaires photovoltaïques": number,
    "Installation d'un système de ventilation": number,
    "Rampants ou combles perdus ?": string,
    "fait ?": string,
    "Trav 1": string,
    "Trav 2": string,
    "Trav 3": string,
    "Prix": number,
    "Niveau aides": string,
    "Baisse factures": number,
    "Confort hiver": number,
    "Confort été": number,
    "Nom scénario": string,
    "identiques ?": string,
    "Trav 1 Sc2": string,
    "Trav 2 Sc2": string,
    "Trav 3 Sc2": string,
    "Trav 4 Sc2": string,
    "Prix Sc2": number,
    "Niveau aides Sc2": string,
    "Baisse factures Sc2": number,
    "Confort hiver Sc2": number,
    "Confort été Sc2": number,
    "Nom scénario Sc2": string,
    "identiques Sc2": number,
    "identiques ? Sc2": string,
    "Trav 1 Sc3": string,
    "Trav 2 Sc3": string,
    "Trav 3 Sc3": string,
    "Trav 4 Sc3": string,
    "Trav 5 Sc3": string,
    "Trav 6 Sc3": string,
    "Prix Sc3": number,
    "Niveau aides Sc3": string,
    "Baisse factures Sc3": number,
    "Confort hiver Sc3": number,
    "Confort été Sc3": number,
    "Nom scénario Sc3": string
}

export type SearchCriteria = {
    "Isolation du toit": number,
    "Changement des fenêtres": number,
    "Isolation des murs": number,
}

export const getCSV = (setValues: React.Dispatch<React.SetStateAction<Data[] | undefined>>, criteria: SearchCriteria) => {
    Papa.parse(`${process.env.PUBLIC_URL}/data.csv`, {
        download: true,
        header: true,
        skipEmptyLines: true,
        delimiter: ",",
        dynamicTyping: true,
        complete: (results: ParseResult<Data>) => {
            console.log(results)

            // Recherchez la première ligne qui satisfait tous les critères
            const matchingRow = results.data.find(row => {
                return Object.entries(criteria).every(([key, value]) => row[key as keyof Data] === value)
            })

            // `matchingRow` est maintenant la première ligne qui satisfait tous les critères, ou `undefined` si aucune ligne ne correspond
            setValues(matchingRow ? [matchingRow] : [])

            // Affichez `matchingRow` dans la console
            console.log(matchingRow)
        }
    })
}

// Exemple d'utilisation de la fonction getCSV avec des critères de recherche
/*const searchCriteria: SearchCriteria = {
    "Isolation du toit": 1,
    "Changement des fenêtres": 1,
    "Isolation des murs": 1,
    
}

const [values, setValues] = React.useState<Data[] | undefined>()

getCSV(setValues, searchCriteria)*/