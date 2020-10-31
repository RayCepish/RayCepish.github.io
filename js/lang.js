const doc =document;
function setLang(selectedLang) {
    const elements = doc.querySelectorAll('[data-lang]');

    for (const el of elements) {
        el.hidden = el.dataset.lang !== selectedLang;
    }
}

setLang('ua');

function changeLangEvent(checkbox) {
    if (checkbox.checked) {
        setLang('eng');
    } else {
        setLang('ua');
    }
}