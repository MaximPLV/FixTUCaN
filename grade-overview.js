let table = document.querySelector('table.nb');
let grades = [1.0, 1.3, 1.7, 2.0, 2.3, 2.7, 3.0, 3.3, 3.7, 4.0, 5.0];
let gradeAmountElems = table.querySelectorAll('td.tbdata');
let gradeAmountNums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 1; i < gradeAmountElems.length - 1; i++) {
    gradeAmountNums[i - 1] = parseInt(gradeAmountElems[i].textContent.replace('---', '0'));
}

let totalAmountWithout5 = 0;
let averageGradeWithout5 = 0.0;

for (let i = 0; i < gradeAmountNums.length - 1; i++) {
    totalAmountWithout5 += gradeAmountNums[i];
}

//grades.length == gradesAmounts.length
for (let i = 0; i < grades.length - 1; i++) {
    averageGradeWithout5 += grades[i] * gradeAmountNums[i] / totalAmountWithout5;
}


let newDiv = document.createElement('div');
newDiv.className = 'tbdata';
newDiv.innerHTML = 'Durchschnitt exkl. 5,0: ' + averageGradeWithout5.toFixed(3).replace('.', ',');

let allTbDataDivs = document.querySelectorAll('.tbdata');

let pattern = /Durchschnitt: +\d,\d\d\d/;

for (let div of allTbDataDivs) {
    if (pattern.test(div.textContent.trim())) {
        //alert("found");
        div.parentNode.insertBefore(newDiv, div.nextSibling);
        break;
    }
}




