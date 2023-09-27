/* opgave 1 */
console.group("opgave 1");
// din kode her
for (let i = 1; i <= 10; i++) {
    console.log(i);
    const targetDom = document.getElementById('opgave1');
    let numberList = document.createElement('li');
    numberList.innerHTML = i;

    targetDom.appendChild(numberList);
}

console.groupEnd();


/* opgave 2 */
console.group("opgave 2");
// din kode her
for (let i = 10; i < 12; i++) {
    console.log(i);
    const targetDom = document.getElementById('opgave2');
    let numberList = document.createElement('li');
    numberList.innerHTML = i;

    targetDom.appendChild(numberList);
}

console.groupEnd();


/* opgave 3 */
console.group("opgave 3");
// din kode her
for (let i = 2; i < 41; i++) {
    console.log(i);
    const targetDom = document.getElementById('opgave3');
    let numberList = document.createElement('li');
    numberList.innerHTML = i;

    targetDom.appendChild(numberList);
}

console.groupEnd();









