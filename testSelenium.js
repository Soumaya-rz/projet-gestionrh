const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver'); 

async function runTests() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        
        await driver.get('file:///Users/descodeuses/Documents/CDA/gestionrh/index.html');


        // ajout d'un employé
        console.log('Test d\'ajout d\'un employé');
        await driver.findElement(By.id('ajout-nom')).sendKeys('Lemoine');
        await driver.findElement(By.id('ajout-poste')).sendKeys('Manager');
        await driver.findElement(By.xpath("//button[contains(text(), 'Ajouter')]")).click();
        await driver.wait(until.elementLocated(By.id('liste-employes')), 1000); 
        const listeEmployes = await driver.findElement(By.id('liste-employes')).getText();
        console.log('Liste des employés après ajout:', listeEmployes);

       
        if (!listeEmployes.includes('Lemoine')) {
            throw new Error('L\'employé Lemoine n\'a pas été ajouté correctement.');
        }

        // suppression d'un employé
        console.log('Test de suppression d\'un employé');
        await driver.findElement(By.id('supprimer-id')).sendKeys('1'); 
        await driver.findElement(By.xpath("//button[contains(text(), 'Supprimer')]")).click();
        await driver.wait(until.elementLocated(By.id('liste-employes')), 1000); 
        const updatedListeEmployes = await driver.findElement(By.id('liste-employes')).getText();
        console.log('Liste des employés après suppression:', updatedListeEmployes);

        
        if (updatedListeEmployes.includes('Dupont')) {
            throw new Error('L\'employé Dupont n\'a pas été supprimé correctement.');
        }

    } finally {
        await driver.quit();
    }
}

runTests();
