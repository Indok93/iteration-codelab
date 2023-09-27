const numbers = [1, 2, 3, 4, 5];

/* opgave 1 */
console.group("opgave 1");
// din kode her

let sum = 0; // creating variable to store the number in
let max = "";


numbers.forEach((number) => {
    console.log(number);
    sum += number;

    if (number > max) {
        max = number;
    }
    
});
console.log('Sum af array', sum);
console.log('Højeste tal', max);

const targetDom = document.getElementById('opgave1');
let showNumbers = document.createElement('div');
let showSum = document.createElement('div')
let showMaxNumber = document.createElement('div')

showNumbers.innerHTML = `<li>${numbers}</li>`;
showSum.innerHTML = `<li>Summen af array: ${sum}</li>`;
showMaxNumber.innerHTML = `<li>Højeste tal: ${max}</li>`;

targetDom.appendChild(showNumbers);
targetDom.appendChild(showSum);
targetDom.appendChild(showMaxNumber);


console.groupEnd();


/* opgave 2 */
console.group("opgave 2");
// din kode her
const animalData = getData();
console.log(animalData);


animalData.forEach((animal) => {
    console.log('Navn: ', animal.name);
    console.log('Beskrivelse: ', animal.shortDescription);
    
    const navn = animal.name;
    const billede = animal.picture;

    const targetDomTwo = document.getElementById('opgave2');
    let title = document.createElement('h3');
    let img = document.createElement('img');

    title.innerHTML = `${navn}`;
    img.src = `${billede}`;

    targetDomTwo.appendChild(title);
    targetDomTwo.appendChild(img);

});


console.groupEnd();


/* opgave 3 */
console.group("opgave 3");
// din kode her
const apiEndpoint = "https://dummyjson.com/users";
fetch(apiEndpoint)

.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    const userData = data.users;
    extractData(userData);
})
.catch((error) => {
    console.error(error);
});

function extractData(userData) {
    console.log(userData);
    userData.forEach((user) => {
        console.log(`${user.firstName} ${user.lastName}, ${user.age}`);
        displayUsers(user.firstName, user.lastName, user.age);
    })
}

function displayUsers(firstName, lastName, age) {
    //console.log(`${firstName}`);
    const targetDomThree = document.getElementById('opgave3');
    const userData = document.createElement('li');

    userData.innerHTML = `${firstName} ${lastName}, ${age}`;

    targetDomThree.appendChild(userData);

}

console.groupEnd();














// support functions ---------------------------------------------------------------------------------------------

function getData() {





    const myData = [

        {
            name: 'Elefant',
            picture: 'assets/img/elephant.jpg',
            description: 'Loxodonta africana, også kendt som afrikansk elefant, er verdens største landdyr. Den har en grå hud og store ører, som den bruger til at regulere kropstemperaturen og kommunikere med andre elefanter. Afrikanske elefanter lever i store flokke og spiser op til 150 kg planter om dagen. De er også kendt for deres stærke intelligens og følelsesmæssige bånd til deres familie og flok. På grund af ulovlig jagt og tab af levesteder er afrikanske elefanter klassificeret som truede og er beskyttet af lovgivning'
            , shortDescription: 'Loxodonta africana, også kendt som afrikansk elefant.'
        },

        {
            name: 'Tiger',
            picture: 'assets/img/standard_tiger.jpg',
            description: 'Panthera tigris, også kendt som tigeren, er en stor kat, der er hjemmehørende i Asien. Tigeren har en gul eller orange pels med mørke striber og har normalt en lang kraftig hale. Der findes forskellige underarter af tigeren, og størrelsen og farven kan variere afhængigt af underarten og habitatet. Tigeren er kendt for sin styrke, hurtighed og smidighed, og den er en top-rovdyr i sit økosystem. Desværre er mange af underarterne af tigeren truede på grund af tab af levesteder og ulovlig jagt, og bevaring af tigeren og dens levesteder er en vigtig bevaringsindsats.',
            shortDescription: 'Panthera tigris, også kendt som tigeren.'
        },

        {
            name: 'Tarantel',
            picture: 'assets/img/Brachypelma_smithi.jpg',
            description: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel, er en stor og farverig edderkop, der er hjemmehørende i Mexico. Den har en mørk krop med røde og orange striber på benene og en karakteristisk rød knæled. Brachypelma smithi er en populær art blandt edderkoppeentusiaster på grund af dens smukke farver og rolige natur.',
            shortDescription: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel.'
        },

        {
            name: 'Koala',
            picture: 'assets/img/_WW236934.jpg',
            description: 'Phascolarctos cinereus, også kendt som koala, er en pungdyrart, der er hjemmehørende i Australien. Den har en blød, tyk pels, store ører og en stor næse, og dens krop er tilpasset til at leve hovedsageligt af eukalyptusblade. Koalaer lever hovedsageligt i trætoppene og er kendt for deres afslappede og søvnige opførsel, da de sover op til 20 timer om dagen.',
            shortDescription: 'Phascolarctos cinereus, også kendt som koala.'
        },

        {
            name: 'Haj',
            picture: 'assets/img/great-white.jpg',
            description: 'Carcharodon carcharias, også kendt som en hvidhaj eller great white haj, er en stor rovdyr, der lever i kystfarvande over hele verden. Den har en grå-blå krop med en trekantet finne på ryggen og en stor kraftig kæbe med skarpe tænder. Carcharodon carcharias er kendt for at være en top-rovdyr og jager primært sæler og fisk. Den er også kendt for dens sjældne, men berygtede, angreb på mennesker, selvom sådanne angreb ofte er utilsigtede og sjældne.',
            shortDescription: 'Carcharodon carcharias, også kendt som en hvidhaj.'
        }
    ];
    return myData

}






