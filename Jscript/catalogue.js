
/* construction des etiquettes du des catalogue*/


/* Catalogue Chaudière */


var catArticleChaud = [
  {
    //D2CND-A1A
    classes: "gaz",
    image: "./abcImages/chaudiere/D2CND-A1A.png",
    alt: "chaudière Daikin",
    titreHcinq: "D2CND-A1A",
    texteChaud: 'Indoor Unit Chaudière gaz à condensation Chaudière gaz à condensation murale ultra compacte',
    listItem: [
      "Très grande compacité et possibilité d'installation quasiment partout",
      "Entretien facile, car il suffit de déposer le panneau frontal",
      "Grande efficacité de chauffage, jusqu’à 108°",
      "Grande plage de modulation 1:8 : puissance adaptable de 3 à 24 kW",
      "combiner avec un convertisseur héliothermique pour une efficacité énergétique "
    ],
    comHref: "devischaudiere.html",
    tarifChaud: 2500,
    fichHref: "./fiche_tech/ficheTechD2CND-A1A.xls",
  },
  {
    //D2HND-A5A
    classes: "gaz",
    image: "./abcImages/chaudiere/D2HND-A5A.png",
    alt: "chaudière Daikin",
    titreHcinq: "D2HND-A5A ",
    texteChaud: 'Indoor Unit Chaudière gaz à condensation Chaudière gaz à condensation, pour le chauffage uniquement, très compacte ',
    listItem: [
      "Differentiated central heating and DHW capacities",
      "LAN Adapter connection",
      "Trés grande compacité et possibilité d'installation quasiment partout",
      "Grande plage de modulation 1:8 : puissance adaptable de 3 à 24 kW",
      "Energy metering function integrated",
    ],
    comHref: "devischaudiere.html",
    tarifChaud: 2250,
    fichHref: "./fiche_tech/ficheTechD2hnd-a.xls",
  },
  {
    //D9HA2-A
    classes: "Mazout",
    image: "./abcImages/chaudiere/D9HA2-A.png",
    alt: "chaudière Daikin",
    titreHcinq: "D9HA2-A",
    texteChaud: "Indoor Unit chaudière mazout à condensation A2. L’A2 est une chaudière mazout à condensation véritablement parÈe pour l'avenir, destinÈe principalement à des applications de remplacement et de rénovation Pour une maintenance aisée, possibilité d'accËs à tous les composants par l’avant de l’unité",
    listItem: [
      "Design compact très élégant",
      "Connectivity to digital platforms",
      "Haute efficacité assurée par un bruleur modulant",
      "Connectivité à des plateformes numériques",
      "Modulating burner providing high efficiency",
    ],
    comHref: "devischaudiere.html",
    tarifChaud: 1899,
    fichHref: "./fiche_tech/ficheTechD9HA2-A.xls",
  },
  {
    //EDLQ011-016C3V3 
    classes: "pompechaleur",
    image: "./abcImages/chaudiere/EDLQ011-016C3V3.png",
    alt: "chaudière Daikin",
    titreHcinq: "EDLQ011-016C3V3 ",
    texteChaud: "Pompe à chaleur Monobloc Daikin Altherma Basse Température Système monobloc idéal pour des espaces d'installation réduits",
    listItem: [
      "Chauffage d’appoint intégré",
      "LAN Adapter connection",
      "Haute efficacité assurée par un bruleur modulant",
      "Monobloc all-in-one concept including hydraulic parts",
      "A++ heating energy label (from G to A++)",
    ],
    comHref: "devischaudiere.html",
    tarifChaud: 3200,
    fichHref: "./fiche_tech/ficheTechEDLQ011-016C3V3.xls",
  },
  {
    //EHBX-CB
    classes: "pompechaleur",
    image: "./abcImages/chaudiere/EHBX-CB.png",
    alt: "chaudière Daikin",
    titreHcinq: "EHBX-CB",
    texteChaud: "Daikin Altherma Indoor Unit Pompe à chaleur Bibloc Daikin Altherma Basse Température Daikin Altherma Bi-Bloc Basse Température Réversible Modèle mural, idéal pour les maisons à faible consommation",
    listItem: [
      "Conçue pour les constructions neuves",
      "Pompe à chaleur air-eau pour le chauffage et le rafraîchissement",
      "Couts de fonctionnement réduit grâce à de très hautes performances",
      "La configuration des émetteurs de chaleur est très simple",
      " Unité intérieure murale",
    ],
    comHref: "devischaudiere.html",
    tarifChaud: 2000,
    fichHref: "./fiche_tech/fichTechEHBX-CB.xls",
  },
  {
    //EHSX-B
    classes: "pompechaleur",
    image: "./abcImages/chaudiere/EHSX-B.png",
    alt: "chaudière Daikin",
    titreHcinq: "EHBX-CB",
    texteChaud: "Daikin Altherma Indoor Unit Pompe à chaleur Bibloc Daikin Altherma Basse Température Daikin Altherma Basse Température Compacte Réversible",
    listItem: [
      "Système solaire non pressurisé",
      "De l'eau neuve et sûre à tout moment",
      "Réservoir sans entretien",
      "Utilisation maximale d'énergie renouvelable : air et soleil",
      "Unité solaire intégrée pour le chauffage , le rafraîchissement et l'eau chaude",
    ],
    comHref: "devischaudiere.html",
    tarifChaud: 1790,
    fichHref: "./fiche_tech/ficheTechEHSX-B.xls",
  },
]

var getId = document.getElementById('catChaudiere');


let constDivCat = "";
for (let i = 0; i < catArticleChaud.length; i++) {
  const catDiv = catArticleChaud[i];
 
  constDivCat += '<div class="card shadow-lg p-3 mb-5 bg-white rounded mb-3 mt-3 pb-3 catArticle ' + catDiv.classes + '">';
  constDivCat += '<div class="row no-gutters">';
  constDivCat += '<div class="col-md-4">';
  constDivCat += '<img src="' + catDiv.image + '" class="card-img catImag" alt="' + catDiv.alt + '"> ';
  constDivCat += '</div>';
  constDivCat += '<div class="col-md-8">';
  constDivCat += '<div class="card-body">';
  constDivCat += '<h5 class="card-title">' + catDiv.titreHcinq + '</h5>';
  constDivCat += '<p class="card-text">' + catDiv.texteChaud + '</p>';
  constDivCat += '<ul class="list-group catList">';
  for (let a = 0; a < catDiv.listItem.length; a++) {
  constDivCat += '<li class="list-group-item">' + catDiv.listItem[a] + '</li>';}
  constDivCat += '</ul>';
  constDivCat += '<h2 class="h2">'+catDiv.tarifChaud+' &#8364;</h2>';
  constDivCat += '<button type="button" class="btn btn-light mt-2 valide"><a href="' + catDiv.comHref + '">Commandez</a></button>';
  constDivCat += '<button type="button" class="btn btn-light mt-2 fichTech"><a href="' + catDiv.fichHref + '">Fiche technique</a></button>';
  constDivCat += '</div>';
  constDivCat += '</div>';
  constDivCat += '</div>';
  constDivCat += '</div>';
}

getId.innerHTML = constDivCat









