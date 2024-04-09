import Papa from 'papaparse';
import { useCSVReader} from 'react-papaparse';
/*
export function importData() {
  console.log("entrer dans importData");

  return new Promise((resolve, reject) => {
    Papa.parse("../public/datat.csv", {
      download: true,
      header: true,
      complete: function(results: { data: any[] }) {
        console.log("Chargement terminé. Données :", results.data);

        // Créer une chaîne avec les 5 premières lignes du CSV
        let firstFiveRows = '';
        for (let i = 0; i < 5 && i < results.data.length; i++) {
          firstFiveRows += JSON.stringify(results.data[i]) + '\n';
        }

        // Afficher les 5 premières lignes dans une popup
        alert(firstFiveRows);

        // Résoudre la promesse avec les données
        resolve(results.data);
      },
      error: function(error) {
        console.log("Une erreur s'est produite lors du chargement du fichier CSV :", error);

        // Rejeter la promesse avec l'erreur
        reject(error);
      }
    });
  });
}
*/

import { usePapaParse } from 'react-papaparse';

export function importData() {
  console.log("entrer dans importData");

  return new Promise((resolve, reject) => {
    const { readRemoteFile } = usePapaParse();
    readRemoteFile('/datat.csv', {
      header: true,
      download: true,
      complete: (results: any) => {
        console.log("Chargement terminé. Données :", results.data);

        // Créer une chaîne avec les 5 premières lignes du CSV
        let firstFiveRows = '';
        for (let i = 0; i < 5 && i < results.data.length; i++) {
          firstFiveRows += JSON.stringify(results.data[i]) + '\n';
        }

        // Afficher les 5 premières lignes dans une popup
        alert(firstFiveRows);

        // Résoudre la promesse avec les données
        resolve(results.data);
      },
      error: (error: any) => {
        console.log("Une erreur s'est produite lors du chargement du fichier CSV :", error);

        // Rejeter la promesse avec l'erreur
        reject(error);
      }
    });
  });
}
    

    