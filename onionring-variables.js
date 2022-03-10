// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
    {
        "url": 'https://www.joshpsawyer.com/',
        "name": "josh's internet scrapyard",
        "description": "pixel art, paintings, games by josh sawyer"
    },
    {
        "url": 'https://www.amberzgordon.ink/',
        "name": "Amber Z. Gordon",
        "description": "personal portfolio of Amber Z. Gordon"
    },
    {
        "url": 'http://annaglinsmann.de/',
        "name": "annaglin - Anna Glinsmann Illustration, Animation, Interaktion",
        "description": "Glinsmann Illustration, Animation, Interaktion"
    },
];

//the name of the ring
var ringName = 'Donaldsons';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'donaldsonwebring';

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://webring.joshpsawyer.com/index.html';

//should the widget include a random button?
var useRandom = false;
