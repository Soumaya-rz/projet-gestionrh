// app.js
const employes = [
  { id: 1, nom: "Dupont", poste: "Développeur" },
  { id: 2, nom: "Durand", poste: "Designer" },
  { id: 3, nom: "Martin", poste: "Chef de projet" },
];

modifierEmploye(id, nouveauNom, nouveauPoste);

function afficherEmployes() {
  const listeDiv = document.getElementById("liste-employes");
  listeDiv.innerHTML = "";
  employes.forEach((emp) => {
    const empDiv = document.createElement("div");
    empDiv.textContent = `${emp.id} - ${emp.nom} - ${emp.poste}`;
    listeDiv.appendChild(empDiv);
  });
}

function ajouterEmploye(id, nom, poste) {
  employes.push({ id, nom, poste });
}

function supprimerEmploye(id) {
  const index = employes.findIndex((emp) => emp.id === id);
  if (index !== -1) {
    employes.splice(index, 1);
  }
}

function modifierEmployeManuel() {
    const id = parseInt(document.getElementById('modifier-id').value);
    const nouveauNom = document.getElementById('modifier-nom').value;
    const nouveauPoste = document.getElementById('modifier-poste').value;
    
    modifierEmploye(id, nouveauNom, nouveauPoste);
    afficherEmployes();  
  }


function ajouterEmployeManuel() {
  const nom = document.getElementById("ajout-nom").value;
  const poste = document.getElementById("ajout-poste").value;
  const id = employes.length > 0 ? employes[employes.length - 1].id + 1 : 1;
  if (nom && poste) {
    ajouterEmploye(id, nom, poste);
    afficherEmployes();
  }
}

function supprimerEmployeManuel() {
  const id = parseInt(document.getElementById("supprimer-id").value, 10);
  if (!isNaN(id)) {
    supprimerEmploye(id);
    afficherEmployes();
  }
}
