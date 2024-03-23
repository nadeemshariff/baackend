import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

// I'll create a route with parameters
// Getiing list of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
    {
        id: 1,
        title: '1st !',
        content: 'Why don’t scientists trust atoms? Because they make up everything'
    },
    {
        id: 2,
        title: '2nd !',
        content: 'wywywywywywy'
    },
    {
        id: 3,
        title: '3rd !',
        content: 'kajbfvaoidvnb'
    },
    {
        id: 4,
        title: '4tg !',
        content: 'Tomssisa'
    },
    {
        id: 5,
        title: '5th !',
        content: 'lalalalaalalalal'
    },
    ];
    res.send(jokes);
});


const port = process.env.PORT || 3000;

// Start the server on the specified port and binding host address.
app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));
