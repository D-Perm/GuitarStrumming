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
const showAnswers = document.querySelector("#showAnswers");
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
    function isAdvancedAttrSupported() {
  const T = document.createElement('div');
  document.body.appendChild(T);
  
  try {
    T.style.setProperty('--t', 'attr(data-test type(<number>), 0)');
    T.dataset.test = "123";

    const computedValue = getComputedStyle(T)
      .getPropertyValue('--t')
      .trim();
    
    return computedValue === "123";
  } catch (e) {
    return false;
  } finally {
    T.remove();
  }
}

if (!isAdvancedAttrSupported()) {
  const fretBoards = document.querySelectorAll('fret-board');
  fretBoards.forEach(fret => {
    fret.style.setProperty('--_strings', fret.getAttribute('strings'));
    fret.style.setProperty('--_frets', fret.getAttribute('frets'));
    const stringNotes = fret.querySelectorAll('string-note');
    stringNotes.forEach(note => {
      note.style.setProperty('--string', note.getAttribute('string') || 1);
      note.style.setProperty('--fret', note.getAttribute('fret') || 0);
      note.style.setProperty('--barre', note.getAttribute('barre') || 1);
    });
  });
}
}

chordFilter = [];
displayedChordsTypes = [];
displayedChordsWhich = [];
furtherChordFilter = [];
furtherChordFilter2 = [];
finalChordDisplay = [];
}
