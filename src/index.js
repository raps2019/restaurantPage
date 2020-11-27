console.log("This should log without refreshing")

import pageLoad from './modules/pageContent';

pageLoad();

import populateMenu from './modules/menu';
import populateAbout from './modules/about';
import populateContact from './modules/contact';
import populateHours from './modules/hours';
// import "../src/style.css"


// populateMenu(['one','two'])

let main = document.querySelector('#main');
let aboutButton = document.querySelector('#aboutButton');
let menuButton = document.querySelector('#menuButton');
let contactButton = document.querySelector('#contactButton');
let hoursButton = document.querySelector('#hoursButton');

let div = populateAbout();
main.appendChild(div)

document.addEventListener('click', function(e) {

    aboutButton.className = 'navButton';
    menuButton.className = 'navButton';
    contactButton.className = 'navButton';
    hoursButton.className = 'navButton';


    if (e.target.id === 'aboutButton') {
        aboutButton.classList.add('navButtonActive')
        main.innerHTML = ''
        let div = populateAbout();
        main.appendChild(div)
    } else if (e.target.id === 'menuButton') {
        menuButton.classList.add('navButtonActive')
        main.innerHTML = ''
        let div = populateMenu();
        main.appendChild(div)
    } else if (e.target.id === 'contactButton') {
        contactButton.classList.add('navButtonActive')
        main.innerHTML = '';
        let div = populateContact();
        main.appendChild(div);
    } else if (e.target.id === 'hoursButton') {
        hoursButton.classList.add('navButtonActive')
        main.innerHTML = '';
        let div = populateHours();
        main.appendChild(div);
    }
});