const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelector('nav');

let nav1 = document.querySelectorAll('a');

nav1[0].textContent = siteContent["nav"]["nav-item-1"];
nav1[1].textContent = siteContent["nav"]["nav-item-2"];
nav1[2].textContent = siteContent["nav"]["nav-item-3"];
nav1[3].textContent = siteContent["nav"]["nav-item-4"];
nav1[4].textContent = siteContent["nav"]["nav-item-5"];
nav1[5].textContent = siteContent["nav"]["nav-item-6"];

nav1.forEach((text1,i) => (nav1[i].style.color = "green"))


let cta = document.querySelector('h1');
cta.textContent = siteContent["cta"]["h1"];

let cta1 = document.querySelector('button');
cta1.textContent = siteContent["cta"]["button"];

let codeimg = document.getElementById("cta-img");
codeimg.setAttribute('src', siteContent["cta"]["img-src"])



let mainContent = document.querySelectorAll('h4');
mainContent[0].textContent= siteContent["main-content"]["features-h4"];
mainContent[1].textContent= siteContent["main-content"]["about-h4"];
mainContent[2].textContent= siteContent["main-content"]["services-h4"];
mainContent[3].textContent= siteContent["main-content"]["product-h4"];
mainContent[4].textContent= siteContent["main-content"]["vision-h4"];


let mainContent1 = document.querySelectorAll('p');
mainContent1[0].textContent= siteContent["main-content"]["features-content"];
mainContent1[1].textContent= siteContent["main-content"]["about-content"];
mainContent1[2].textContent= siteContent["main-content"]["services-content"];
mainContent1[3].textContent= siteContent["main-content"]["product-content"];
mainContent1[4].textContent= siteContent["main-content"]["vision-content"];

let mainimg = document.getElementById("middle-img");
mainimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


const contact = document.querySelector(".contact h4");
contact.textContent= siteContent["contact"]["contact-h4"];
console.log(contact);

let contact1 = document.querySelectorAll(".contact p");
contact1[0].textContent= siteContent["contact"]["address"];
contact1[1].textContent= siteContent["contact"]["phone"];
contact1[2].textContent= siteContent["contact"]["email"];

let footer1 = document.querySelector("footer p");
footer1.textContent = siteContent["footer"]["copyright"];

const hr = document.createElement('a');
hr.textContent= "Human Resource";
hr.style.color= 'green';
nav.prepend(hr);

const code = document.createElement('a');
code.textContent= 'Codeing School';
code.style.color='green';
nav.append(code);

//code thtoafkngoainfganvnaeorjnoaernvoenrjon
















// let mainContent2 = document.querySelector('p');
// mainContent2.textContent = siteContent["main-content"]["features-content"];

// let mainContent3 = document.querySelector('h4');
// mainContent3.textContent = siteContent["main-content"]["about-h4"];


//content to get same results as showing nav items
// const navitem3 = document.querySelectorAll('a:nth-of-type(3)');
// navitem3.forEach( element => {
//   element.textContent = "Vision"; 
// });

// const navitem4 = document.querySelectorAll('a:nth-of-type(4)');
// navitem4.forEach( element => {
//   element.textContent = "Features"; 
// });

// const navitem5 = document.querySelectorAll('a:nth-of-type(5)');
// navitem5.forEach( element => {
//   element.textContent = "About"; 
// });

// const navitem6 = document.querySelectorAll('a:nth-of-type(6)');
// navitem5.forEach( element => {
//   element.textContent = "Contact"; 
// });

// let nav = querySelectorAll('a');