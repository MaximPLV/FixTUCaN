console.log("hello");

let table = document.querySelector('table.nb');
let grades = table.querySelectorAll('td.tbsubhead');
console.log(grades);
let gradeAmountElems = table.querySelectorAll('td.tbdata');
let gradeAmountNums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 1; i < gradeAmountElems.length - 1; i++) {
    gradeAmountNums[i - 1] = parseInt(gradeAmountElems[i].textContent.replace('---', '0'));
}

console.log(gradeAmountNums);
let totalAmount = 0;
let averageGradeWithout5 = 0.0;

for (let i = 1; i < gradeAmountNums.length - 1; i++) {
    totalAmount += gradeAmountNums[i];
    console.log(totalAmount)
}

//grades.length == gradesAmounts.length
for (let i = 1; i < grades.length - 1; i++) {
    let grade = parseFloat(grades.item(i).textContent.replace(',', '.'));
    let gradeAmount = gradeAmountNums[i];
    console.log(grade);
    console.log(gradeAmount);
    averageGradeWithout5 += grade * gradeAmount / totalAmount;
    console.log(averageGradeWithout5);
}


let newDiv = document.createElement('div');
newDiv.className = 'tbdata';
newDiv.innerHTML = 'Durchschnitt exkl. 5,0: ' + averageGradeWithout5.toFixed(3).replace('.', ',');

let allTbdataDivs = document.querySelectorAll('.tbdata');

let pattern = /Durchschnitt: +\d,\d\d\d/;

for (let div of allTbdataDivs) {
    if (pattern.test(div.textContent.trim())) {
        //alert("found");
        div.parentNode.insertBefore(newDiv, div.nextSibling);
        break;
    }
}




