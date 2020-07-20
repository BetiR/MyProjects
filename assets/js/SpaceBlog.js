class card {
    constructor(_index, _img, _title, _text, _badge) {
        (this.index = _index),
            (this.img = _img),
            (this.title = _title),
            (this.text = _text),
            (this.badge = _badge)
    }
};

let card1 = new card(
    '1',
    'assets/images/Space_Blog_Kartici/data-science-in-seo.png',
    'Deep Dive семинари кои овозможуваат брз кариерен напредок',
    'Нов продукт од Brainster во Brainster Space. Интензивни дводневни семинари кои ќе ти      помогнат од Mid level да го постигнеш твојот Senior напредок.',
    'КАРИЕРА'
);

let card2 = new card(
    '2',
    "assets/images/Space_Blog_Kartici/datascience-pdusit-stock.jpg",
    "Ако не те бива за програмирање дали можеш да имаш кариера во Tech?",
    "Tech индустријата е најпосакуваната област за работа, заради големата побарувачка,секојдневните промени и големиот инкам.",
    "КАРИЕРА"
);

let card3 = new card(
    '3',
    './assets/images/Space_Blog_Kartici/kancelarija.jpg',
    'Што значи денес, твојата канцеларија да е smart?',
    'На отворањето на Brainster Space добивме супер подарок - smart home уред. Голем дел од нас беа збунети за тоа што се можеме да добиеме со него.',
    'ТЕХНОЛОГИЈА'

);

let card4 = new card(
    '4',
    'assets/images/Space_Blog_Kartici/1_xX6Cpskem0SbqQuPZ8R-4g.jpeg',
    'Како до кариера во Data Science?',
    'Од искуството на студентите на нашата академија, решивме да ви помогнеме со неколку tips за потребните skills за да започнете да работите Data Science.',
    'DATA SCIENCE'

);

let card5 = new card(
    '5',
    './assets/images/Space_Blog_Kartici/instruktori.jpg',
    'Интервју со Николај Ванчев, арт директор во Tank, Estonia.',
    'Интервју со Николај Ванчев, арт директор во Tank, Estonia.',
    'МАРКЕТИНГ'
);

let card6 = new card(
    '6',
    './assets/images/Space_Blog_Kartici/Untitled-design-5-1200x600.jpg',
    'Зошто дизајн, накратко со Дијана Димитриевска',
    'Интервју со Дијана Димитриевска, графички дизајнер, DJ и инструктор на Академијата за графички дизајн во Brainster.',
    'ДИЗАЈН'
);

let card7 = new card(
    '7',
    './assets/images/Space_Blog_Kartici/BigData-SmallDevice.jpeg',
    'Што е потребно за добар мобилен дизајн',
    'UX/UI дизајнерите се дигитални продукт дизајнери. Нивна задача е да создадат корисен, релевантен и едноставен за корисниците продукт.',
    'ДИЗАЈН'
);

let card8 = new card(
    '8',
    './assets/images/Space_Blog_Kartici/Team-Picture-1200x600.jpg',
    'Македонско-американската компанија Upshift доби инвестиција од 3,7 милиони...',
    'Он-дименд платформата за работа се шири со нова рунда финансирање предводена од Recruit која е најголемата HR Tech компанија во светот...',
    'IMPACT'
);

let card9 = new card(
    '9',
    './assets/images/Space_Blog_Kartici/20191128_141433810_iOS-1200x600.jpg',
    'Локалната апликација Challenger и нејзиниот импакт.<br> #SpaceFamily',
    'Мисијата на Challenger е создавање општествено одговорна заедница која создава позитивна промена преку развивање на подобри индивидуални навики...',
    'IMPACT'
);

let array = [card1, card2, card3, card4, card5, card6, card7, card8, card9];


array.forEach((element) => {
    document.querySelector('.card-deck').innerHTML += `
           <div class="card shadow rounded hide mb-4 ${element.badge}" style="min-width: 18rem; max-width: 23rem">
                <img class="card-img-top" style="height: 12rem;" src="${element.img}">
                <div class="card-body">
                    <h4 class="card-title"><b>${element.title}<br></b></h4>
                    <p class="card-text">
                        ${element.text}
                    </p>
                </div>
                <div class="container">
                    <span class="badge"><b>${element.badge}</b></span>
                    <span><a href="#" class="btn float-right arrow" role="button"><i
                                class="far fa-arrow-alt-circle-right fa-2x"></i></a></span>
                </div>
            </div>
	`;
});

array.forEach((element) => {
    document.querySelector('.jumbotron-fluid').innerHTML +=
        `<div class="container-fluid mySlides fade my-5 py-5"
        style="background-image: linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${element.img})";>
        <div class="container">
            <div id='bg' class="row badge mt-5">${element.badge}
            </div>
            <div class="row text-left text-white mt-3">
                <h2><b>${element.title}</b></h2>
            </div>
            <div class="row">
                <div class="slider-text mt-3 col-md-8 text-white text-left">
                    <h6>${element.text}</h6><br>
                    <button class="btn px-3 py-2 mt-2 f-10 kopce-inv" type="submit"><i
                            class="fas fa-arrow-right pr-2"></i>
                        ДОЗНАЈ
                        ПОВЕЌЕ</button>
                </div>
                <div class="col-md-3 ml-5 my-4 d-none d-md-block">
                    <p class="numbertext">${element.index}/${array.length}</p>
                    <span class="prev" onclick="plusSlides(-1)"><i
                            class="far fa-arrow-alt-circle-left fa-3x"></i></span>
                    <span class="next pl-3" onclick="plusSlides(1)"><i
                            class="far fa-arrow-alt-circle-right fa-3x"></i></span>
                </div>
                <div class="container-fluid d-lg-none d-md-none d-sm-block mt-5">
                    <span class="prev col-xs-3" onclick="plusSlides(-1)"><i class="far fa-arrow-alt-circle-left fa-3x"></i></span>
                            <span class="numbertext col-xs-3">${element.index}/${array.length}</span>
                    <span class="next col-xs-3" onclick="plusSlides(+1)"><i
                            class="far fa-arrow-alt-circle-right fa-3x float-right"></i></span>
               
                </div>
            </div>

        </div>
    </div>`
});

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 7000);
}

function plusSlides(n) {
    showSlides(slideIndex += n - 1);
}

//FILTER

filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("card");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        AddClass(x[i], "hide");
        if (x[i].className.indexOf(c) > -1) RemoveClass(x[i], "hide");
    }
}

// Show filtered elements
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var filters = document.getElementsByClassName("sub-link");
for (var i = 0; i < filters.length; i++) {
    filters[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}