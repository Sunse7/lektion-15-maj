const nedb = require('nedb-promise');
const database = new nedb({ filename: 'insults.db', autoload: true });

// insert() lägg till i db
// find() sök i db
// update() uppdatera i db
// remove() ta bort från db

// Vad har vi för data i db? - insults och play som ett objekt
// Vad vill vi spara för data? - insults och play
// Hur vill vi spara datan, alltså vilket format? - insults och play som ett objekt

async function addInsult(insult, play) {
    const obj = {
        insult: insult,
        play: play
    } 

    const result = await database.insert(obj);
    return result;
}

async function getInsults() {
    // const result = await database.find({ play: 'Julius Ceasar'});
    const result = await database.find({}); // Hämtar allt från db, retuneras som en array
    return result;
}

async function searchPlays(query) {
    const result = await database.find({ play: query });
    return result;
}

module.exports = { addInsult, getInsults, searchPlays }