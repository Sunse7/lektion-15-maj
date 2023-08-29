const express = require('express');
const app = express();
const port = 8000;
const insultsJSON = require('./insults.json');
const { addInsult, getInsults, searchPlays } = require('./db');

app.use(express.json());

app.get('/api/insults', async (request, response) => { //req vad vi får från frontend, res vad vi skickar tillbaka till frontend
    console.log('Hello World');
    const insults = await getInsults();
    response.json({ success: true, insults })
});

app.post('/api/insults/add', async (req, res) => {
    const body = req.body;
    // insultsJSON.insults.push(insult);
    const result = await addInsult(body.insult, body.play);

    if (result) {
        res.json({ success: true, message: result})
    } else {
        res.json({ success: false, message: 'Could not save insult'})

    }
});

app.get('/api/insults/:play', async (req, res) => {
    const query = req.params.play;

    const result = await searchPlays(query);
    res.json({ success: true, insults: result })
});

app.listen(port, () => {
    console.log('Server listening on port 8000');
});

// async function getInsults() {
//     const response = await fetch('http//localhost:8000/api/insults', { method: 'GET' });
//     const data = response.json();
// }