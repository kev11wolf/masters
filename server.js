// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const GOOGLE_SHEET_URL = 'https://sheets.googleapis.com/v4/spreadsheets/YOUR_SHEET_ID/values/Sheet1?key=YOUR_API_KEY';

// Get Participants from Google Sheets
app.get('/participants', async (req, res) => {
    try {
        const response = await axios.get(GOOGLE_SHEET_URL);
        const rows = response.data.values;
        const participants = rows.slice(1).map(row => ({
            name: row[0],
            picks: row[1].split(',').map(pick => pick.trim()),
            scores: []
        }));
        res.json(participants);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch participants." });
    }
});

// Update Scores (you will need to call this when you get live scores)
app.post('/update-scores', (req, res) => {
    const { scores } = req.body;
    participants.forEach(participant => {
        participant.scores = participant.picks.map(pick => scores[pick] || 0);
    });
    res.json({ message: "Scores updated successfully!" });
});

// Fetch Live Scores from an API (example: ESPN API)
app.get('/live-scores', async (req, res) => {
    try {
        const response = await axios.get('https://api.example.com/live-scores'); // Replace with a real API
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch live scores." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
