let Informations = {
    Lebenslauf : {
        Name            : "Spink",
        Vorname         : "Samuel",
        Geburtsdatum    : "15. Feb 2007",
        "Nationalität"  : "Schweiz 🇨🇭, England 🇬🇧, Slowakei 🇸🇰",
        Heimatort       : "Zürich",
        "E-Mail"        : "x47base@proton.me"
    },

}

function createCVItem(key, argument) {
    let html = '<div class="cv-item"><span class="item-x">' + key + '</span><span class="item-y">' + argument +'</span></div>';
    return html;
}

function getParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    const argument = urlParams.get(name);
    return argument;
}

document.addEventListener('DOMContentLoaded', (event) => {
    let cv_main = document.querySelector('.cv-container');
    let category_info = Informations["Lebenslauf"];

    for (let key in category_info){
        let argument = category_info[key];
        let html = createCVItem(key, argument);
        cv_main.insertAdjacentHTML('beforeend', html);
    }
});
