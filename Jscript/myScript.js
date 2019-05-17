
/* Objet des menu dans le header/navbar */

var navBoost = [
  {//la nav fioul
    classNav: "nav-item dropdown",
    classLink: "nav-link dropdown-toggle",
    id: "subNav1",
    subDiv: "dropdown-menu fioul",
    classItem: "dropdown-item",
    url: "#",
    url1: "devisfioul.html",
    url2: "intervention.html",
    url3: "environement.html",
    subTitle1: "Devis fioul",
    subTitle2: "Intervention",
    subTitle3: "Environement",
    title: "Fioul"
  },

  {//la nav plomberie
    classNav: "nav-item dropdown",
    classLink: "nav-link dropdown-toggle",
    id: "subNav2",
    subDiv: "dropdown-menu plomb",
    classItem: "dropdown-item",
    url: "#",
    url1: "catalogueplomberie.html",
    url2: "devis.html",
    url3: "intervention.html",
    subTitle1: "Catalogue",
    subTitle2: "Devis Plomberie",
    subTitle3: "Intervention",
    title: "Plomberie"
  },
  {//la nav chaudiére
    classNav: "nav-item dropdown",
    classLink: "nav-link dropdown-toggle",
    id: "subNav3",
    subDiv: "dropdown-menu chaud",
    classItem: "dropdown-item",
    url: "#",
    url1: "cataloguechaudiere.html",
    url2: "devis.html",
    url3: "intervention.html",
    subTitle1: "Catalogue",
    subTitle2: "Devis chaudiére",
    subTitle3: "Intervention",
    title: "Chaudiére"
  },
]

var contNav = document.getElementById('navBarre')





/* script des sous menu */

var constList = "";
constList += "<li class='nav-item '>";
constList += "<a class='nav-link log' href='index.html'>ABC Chauffage <span class='sr-only'>(current)</span></a>"
constList += "</li>"
constList += "<li class='nav-item'>"
constList += "<a class='nav-link' href='index.html'>Accueil</a>"
constList += "</li>"
for (let i = 0; i < navBoost.length; i++) {
  const b = navBoost[i];

  constList += "<li class='" + b.classNav + "'>";
  constList += " <a class='" + b.classLink + "' href='" + b.url + "' id='" + b.id + "' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>" + b.title + "</a>";
  constList += "<div class='" + b.subDiv + "' aria-labelledby='dropdown'>";
  constList += "<a class='" + b.classItem + "' href='" + b.url1 + "'>" + b.subTitle1 + "</a>";
  constList += "<a class='" + b.classItem + "' href='" + b.url2 + "'>" + b.subTitle2 + "</a>";
  constList += "<a class='" + b.classItem + "' href='" + b.url3 + "'>" + b.subTitle3 + "</a>";
  constList += "</div>";
  constList += "</li>";
}
constList += "<li class='nav-item'>";
constList += "<a class='nav-link' href='quisommesnous.html'>Société</a>";
constList += "</li>";
constList += "<li class='nav-item'>";
constList += "<a class='nav-link' href='contact.html'>Contact</a>";
constList += "</li>";

contNav.innerHTML = constList;

var items =
  [
    {
      classit: 'list-group-item list-group-item-action',
      url: 'mention.html', titre: 'Mention Légale'
    },

    {
      classit: 'list-group-item list-group-item-action',
      url: 'personel.html', titre: 'RGPD'
    },

    {
      classit: 'list-group-item list-group-item-action',
      url: 'cookies.html', titre: 'Cookies'
    },

    {
      classit: 'list-group-item list-group-item-action',
      url: 'condition.html', titre: 'CGV'
    }
  ];

var listFooter = document.getElementById('listfoot');
var lisFooter = document.getElementById('lisfoot');

var listItems = "";
listItems += "<li class='list-group-item'>";
for (var i = 0; i < items.length; i++) {
  listItems += "<a class='" + items[i].classit + "' href='" + items[i].url + "'>" + items[i].titre + "</a>";
}
listItems += "</li>";

listFooter.innerHTML = listItems;

var item =
  [
    {
      classit: 'list-group-item list-group-item-action',
      url: 'quisommesnous.html', titre: 'Qui sommes nous'
    },

    {
      classit: 'list-group-item list-group-item-action',
      url: 'contact.html', titre: 'Contactez-nous'
    },

    {
      classit: 'list-group-item list-group-item-action',
      url: 'plansite.html', titre: 'Plan du Site'
    }
  ]

var listItem = "";
listItem += "<li class='list-group-item'>";
for (var a = 0; a < item.length; a++) {
  listItem += "<a class='" + item[a].classit + "' href='" + item[a].url + "'>" + item[a].titre + "</a>";
}
listItem += "</li>";


lisFooter.innerHTML = listItem





/* Script des cartes page d'acceuil*/

var carte = document.getElementById('row');

var divCard = [
  {
    url: "devisfioul.html",
    image: "./images/camFioulT.jpg",
    texte: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    titre: "Fioul",
    alt: 'Camion citerne.',
    id: 'carteTitre',
    classe: 'cdi1',
    classe1: 'top0',
    class2: 'slogan0'
  },
  {
    url: "devis.html",
    image: "./images/camChaud.jpg",
    texte: " is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    titre: "Chaudiére",
    alt: 'Chaudiére et technicien.',
    id: 'carteTitre1',
    classe: 'cdi2',
    classe1: 'top1',
    class2: 'slogan1'
  },
  {
    url: "devis.html",
    image: "./images/camPlomb.jpg",
    texte: "This  a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    titre: "Plomberie",
    alt: 'lavabo.',
    id: 'carteTitre2',
    classe: 'cdi3',
    classe1: 'top2',
    class2: 'slogan2'
  },
]



var constCard = ""
for (let i = 0; i < divCard.length; i++) {
  constCard += "<div class='col-sm " + divCard[i].classe1 + "'>"
  constCard += "<div class='card text-white " + divCard[i].classe1 + "'>"
  constCard += "<img class='card-img img-fluid " + divCard[i].classe + "' src='" + divCard[i].image + "' alt='" + divCard[i].alt + "'>"
  constCard += "<div class='card-img-overlay carte'>"
  constCard += "<p class='card-text text-left " + divCard[i].class2 + "'>" + divCard[i].texte + "</p>"
  constCard += "<h5 id='" + divCard[i].id + "' class='card-title carteTitre'><a href='" + divCard[i].url + "'>" + divCard[i].titre + "</a></h5>"
  constCard += "</div>"
  constCard += "</div>"
  constCard += "</div>"
};

carte.innerHTML = constCard;



/* Script de la courbe des prix */

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    datasets: [{
      label: 'Prix du fioul £/5l',
      backgroundColor: 'transparent',
      borderColor: 'rgb(247, 16, 16)',
      data: [4, 6, 7, 8, 6, 5, 9, 4, 5, 9, 4, 3]
    }]
  },

  // Configuration options go here
  options: {
    hover: { animationDuration: 5 }
  }
});


//validation formulaire fioul













