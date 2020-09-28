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

// const newLink = document.createElement('a')
// newLink.textContent = 'Services',
// newLink.href = '#'
// document.querySelector('Nav').appendChild(newLink)

// const newLink2 = document.createElement('a')
// newLink2.textContent = 'Products'
// newLink2.href = '#'
// document.querySelector('Nav').appendChild(newLink2)

// const newLink3 = document.createElement('a')
// newLink3.textContent = 'Vision'
// newLink3.href = '#'
// document.querySelector('Nav').appendChild(newLink3)

// const newLink4 = document.createElement('a')
// newLink4.textContent = 'Features'
// newLink4.href = '#'
// document.querySelector('Nav').appendChild(newLink4)

// const newLink5 = document.createElement('a')
// newLink5.textContent = 'About'
// newLink5.href = '#'
// document.querySelector('Nav').appendChild(newLink5)

const newLink6 = document.createElement('a')
newLink6.textContent = 'Hello'
newLink6.href = '#'
document.querySelector('Nav').appendChild(newLink6)

const stuff = document.createElement('a')
stuff.textContent = 'Stuff'
stuff.href = '#'

const nav = document.querySelector('nav')
nav.children[0].textContent = 'Services'
nav.children[1].textContent = 'Products'
nav.children[2].textContent = 'Vision'
nav.children[3].textContent = 'Features'
nav.children[4].textContent = 'About'
nav.children[5].textContent = 'Contact'

const h1 = document.querySelector('h1')
h1.textContent = 'Dom Is Awesome'
const button = document.querySelector('button')
button.textContent = 'Get Started'
const domImg = document.querySelector('#cta-img')
domImg.src = 'img/header-img.png'

const h4 = document.querySelectorAll('h4')
const featureh4 = h4[0]
featureh4.textContent = 'FEATURES'
const abouth4 =h4[1]
abouth4.textContent = 'ABOUT' 
const servicesh4 = h4[2]
servicesh4.textContent = 'Services'
const producth4 = h4[3]
producth4.textContent = 'Prodcuts'
const visionh4 = h4[4]
visionh4.textContent = 'Vision'

const topp = document.querySelectorAll('.top-content p')
topp[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
topp[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const bottomp = document.querySelectorAll('.bottom-content p')
bottomp[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomp[1].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomp[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


// const featuresh4 = document.querySelector('.main-content .top-content:nth-of-type(1) h4')
// featuresh4.textContent = 'features'
// const featuresp = document.querySelector('.main-content .top-content p')
// featuresp.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus'
// const abouth4 = document.querySelector('.main-content .top-content:nth-of-type(2) h4')
// abouth4.textContent = 'features'
// const aboutp = document.querySelector('.main-content .top-content p')
// aboutp.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus'


const middleImg = document.querySelector('#middle-img')
middleImg.src = 'img/mid-page-accent.jpg'



const contacth4 = document.querySelector('.contact h4')
contacth4.textContent = 'CONTACT'
const contactp = document.querySelectorAll('.contact p')
contactp[0].textContent = '123 Way 456 Street'
contactp[1].textContent = '1 (888) 888-8888'
contactp[2].textContent = 'sales@greatidea.io'



const footer = document.querySelector('footer')
footer.textContent = 'Copyright Great Idea! 2018'
