const ButtonHtml = document.getElementById('skil-1');
const ButtonCss = document.getElementById('skil-2');
const Buttonjs = document.getElementById('skil-3');
const Buttonnode = document.getElementById('skil-4');
const Buttonreact = document.getElementById('skil-5');
const Buttonmongodb = document.getElementById('skil-6');
const Html = document.getElementById('html');
const css = document.getElementById('css');
const javascript = document.getElementById('javaScript');
const nodejs = document.getElementById('nodejs');
const reactjs = document.getElementById('reactjs');
const mongo = document.getElementById('mongo');
const allname = document.querySelector('.skills-acore');
const total = document.querySelector('#total');
const htmlHead = document.querySelector('.html-headline');
const cssHead = document.querySelector('.css-headline');
const jsHead = document.querySelector('.js-headline');
const nodeHead = document.querySelector('.node-headline');
const reactHead = document.querySelector('.react-headline');
const mongoHead = document.querySelector('.mongo-headline');
const totalHead = document.querySelector('.total-headline');

mongo.style.display = 'none'
reactjs.style.display = 'none'
nodejs.style.display = 'none'
javascript.style.display = 'none'
css.style.display = 'none'
Html.style.display = 'none'
total.style.display = 'block'
htmlHead.style.display = 'none'
cssHead.style.display = 'none'
jsHead.style.display = 'none'
nodeHead.style.display = 'none'
reactHead.style.display = 'none'
mongoHead.style.display = 'none'
totalHead.style.display = 'block'



ButtonHtml.addEventListener('click', function () {
    mongo.style.display = 'none'
    reactjs.style.display = 'none'
    nodejs.style.display = 'none'
    javascript.style.display = 'none'
    css.style.display = 'none'
    Html.style.display = 'block'
    total.style.display = 'none'
    htmlHead.style.display = 'block'
    cssHead.style.display = 'none'
    jsHead.style.display = 'none'
    nodeHead.style.display = 'none'
    reactHead.style.display = 'none'
    mongoHead.style.display = 'none'
    totalHead.style.display = 'none'
})

ButtonCss.addEventListener('click', function () {
    total.style.display = 'none'
    mongo.style.display = 'none'
    reactjs.style.display = 'none'
    nodejs.style.display = 'none'
    javascript.style.display = 'none'
    css.style.display = 'block'
    Html.style.display = 'none'
    htmlHead.style.display = 'none'
    cssHead.style.display = 'block'
    jsHead.style.display = 'none'
    nodeHead.style.display = 'none'
    reactHead.style.display = 'none'
    mongoHead.style.display = 'none'
    totalHead.style.display = 'none'
})

Buttonjs.addEventListener('click', function () {
    mongo.style.display = 'none'
    total.style.display = 'none'
    reactjs.style.display = 'none'
    nodejs.style.display = 'none'
    javascript.style.display = 'block'
    css.style.display = 'none'
    Html.style.display = 'none'
    htmlHead.style.display = 'none'
    cssHead.style.display = 'none'
    jsHead.style.display = 'block'
    nodeHead.style.display = 'none'
    reactHead.style.display = 'none'
    mongoHead.style.display = 'none'
    totalHead.style.display = 'none'
})


Buttonnode.addEventListener('click', function () {
    mongo.style.display = 'none'
    reactjs.style.display = 'none'
    nodejs.style.display = 'block'
    total.style.display = 'none'

    javascript.style.display = 'none'
    css.style.display = 'none'
    Html.style.display = 'none'
    htmlHead.style.display = 'none'
    cssHead.style.display = 'none'
    jsHead.style.display = 'none'
    nodeHead.style.display = 'block'
    reactHead.style.display = 'none'
    mongoHead.style.display = 'none'
    totalHead.style.display = 'none'
})


Buttonreact.addEventListener('click', function () {
    mongo.style.display = 'none'
    reactjs.style.display = 'block'
    nodejs.style.display = 'none'
    total.style.display = 'none'
    javascript.style.display = 'none'
    css.style.display = 'none'
    Html.style.display = 'none'
    htmlHead.style.display = 'none'
    cssHead.style.display = 'none'
    jsHead.style.display = 'none'
    nodeHead.style.display = 'none'
    reactHead.style.display = 'block'
    mongoHead.style.display = 'none'
    totalHead.style.display = 'none'
})


Buttonmongodb.addEventListener('click', function () {
    mongo.style.display = 'block'
    reactjs.style.display = 'none'
    nodejs.style.display = 'none'
    javascript.style.display = 'none'
    css.style.display = 'none'
    total.style.display = 'none'
    Html.style.display = 'none'
    htmlHead.style.display = 'none'
    cssHead.style.display = 'none'
    jsHead.style.display = 'none'
    nodeHead.style.display = 'none'
    reactHead.style.display = 'none'
    mongoHead.style.display = 'block'
    totalHead.style.display = 'none'
})