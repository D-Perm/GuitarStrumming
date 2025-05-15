const stringChords = document.querySelector("#stringChords");
const lengthChords = document.querySelector("#lengthChords");
const selectedTypes = document.querySelectorAll('.inputType');
const selectedWhich = document.querySelectorAll('.inputWhich');
const showChords = document.querySelector('#showChords');
const divChords = document.querySelector('#divChords')
let chordFilter = [];
let displayedChordsTypes = [];
let displayedChordsWhich = [];
let furtherChordFilter = [];
let furtherChordFilter2 = [];
let finalChordDisplay = [];
let visualChordDisplay = [];
let pickChords;

const getChords = document.querySelector("#getChords");
const showAnswers = document.querySelector("#showAnswers")
getChords.onclick = function (){

visualChordDisplay = [];
divChords.innerHTML = ``;

if(stringChords.value === "EString"){
    chordFilter = chords.filter((chord) => chord.string === "EString")
}else if(stringChords.value === "AString"){
    chordFilter = chords.filter((chord) => chord.string === "AString")    
}else if(stringChords.value === "Both"){
    chordFilter = chords;
}

    selectedTypes.forEach((input) => {
        if(input.checked){
            displayedChordsTypes.push(input.value)
        }
    })
    
    furtherChordFilter = displayedChordsTypes.flatMap((each) => chordFilter.filter((chord) => chord.type === each))

    if(furtherChordFilter.length === 0){
        furtherChordFilter = chordFilter;
    }

    selectedWhich.forEach((input) => {
        if(input.checked){
            displayedChordsWhich.push(input.value)
        }
    })

    furtherChordFilter2 = displayedChordsWhich.flatMap((each) => furtherChordFilter.filter((chord) => chord.name === each))
    if(furtherChordFilter2.length === 0){
        furtherChordFilter2 = furtherChordFilter;
    }

for(let i = 1; i <= lengthChords.value; i++){
    pickChords = Math.floor(Math.random() * furtherChordFilter2.length)
    finalChordDisplay.push(furtherChordFilter2[pickChords].displayName);
    visualChordDisplay.push(furtherChordFilter2[pickChords].data);
}

showChords.innerHTML = finalChordDisplay.join(" → <br>");

showAnswers.onclick = function(){
    divChords.innerHTML = visualChordDisplay.join("");
}

chordFilter = [];
displayedChordsTypes = [];
displayedChordsWhich = [];
furtherChordFilter = [];
furtherChordFilter2 = [];
finalChordDisplay = [];
}
