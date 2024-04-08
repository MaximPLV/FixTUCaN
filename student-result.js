//Ø
let table = document.querySelector('table.nb.list.students_results');

let tableSubHead = table.querySelector('thead > tr.tbsubhead');

let newTh = document.createElement('th');
newTh.className = 'tbsubhead';
newTh.style.textAlign = 'center';
newTh.innerHTML = 'Ø';

let tableSubHeadElems =tableSubHead.querySelectorAll('th');

for (let tableSubHeadElem of tableSubHeadElems) {
    if (tableSubHeadElem.textContent === 'Note') {
        tableSubHeadElem.parentNode.insertBefore(newTh, tableSubHeadElem);
    }
}

let tableBody = table.querySelector('tbody');


for (let element of tableBody.querySelectorAll('tr')) {
    let averageElem = document.createElement('td');
    averageElem.className = 'tbdata';
    averageElem.id = 'test';
    averageElem.style.textAlign = 'center';
    console.log(element)
    let subElements = element.querySelectorAll('td.tbdata');
    subElements = element.children;
    console.log(subElements)
    if (subElements[0].textContent.match(/\d\d-\d\d-\d\d\d\d.*/) && subElements[1].querySelector('a') != null) {
        let onclick = subElements[1].querySelector('a').getAttribute('onclick');
        let url = onclick
            .replace('javascript: dl_popUp(\'', '')
            .replace('\',\'Ergebnisdetails\',800,600);', '');
        myFetch(url, averageElem, element, subElements[5]);
    } else {
        let emptyElem = document.createElement('td');
        emptyElem.className = subElements[subElements.length - 1].className;
        element.insertBefore(emptyElem, null);
    }
}

function myFetch(url, averageElem, insertParentElem, insertBeforeElem) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            let href = data.match(/<a href=".*" class="link" title="Notenspiegel">/)[0];
            href = href.replace('popUp', ' dl_popUp')
                .replace('javascript: dl_popUp(\'', '')
                .replace('\')', '')
                .replace('>', ' target="_blank" rel="noopener noreferrer">');
            console.log(averageElem != null);
            console.log(href);
            averageElem.innerHTML = href + '<b>Ø</b>' + '</a>';
            console.log(averageElem);
            insertParentElem.insertBefore(averageElem, insertBeforeElem);
        })
        .catch(error => console.error('Fehler beim Laden der Daten:', error));
}