const express = require('express');
const app = express();
const port = 3000;

let facilities = [
    { id: 1, name: 'Auditorium', available: true },
    { id: 2, name: 'Computer Lab', available: true },
    { id: 3, name: 'Basketball Court', available: true }
];

app.use(express.json());

app.get('/facilities', (req, res) => {
    res.json(facilities);
});

app.post('/book/:id', (req, res) => {
    const facilityId = parseInt(req.params.id);
    const facility = facilities.find(f => f.id === facilityId);
    if (facility && facility.available) {
        facility.available = false;
        res.json({ message: `${facility.name} booked successfully.` });
    } else {
        res.status(400).json({ message: 'Facility not available.' });
    }
});

app.listen(port, () => {
    console.log(`Smart Campus Booking System running at http://localhost:${port}`);
});
