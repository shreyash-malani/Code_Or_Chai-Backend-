import express from 'express'
const app = express()

const PORT = 3000

app.get('/',(req,res)=>{
    res.send('Server is running!')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why don't scientists trust atoms? Because they make up everything!",
            content: "This is a firstjoke"
        },
        {
            id: 2,
            title: "Why don't eggs tell jokes? They'd crack each other up.",
            content: "This is second joke"
        },
        {
            id: 3,
            title: "Why did the scarecrow win an award? Because he was outstanding in his field!",
            content: "This is a third joke"
        },
        {
            id: 4,
            title: "Why don't lobsters share? Because they're shellfish.",
            content: "This is a fourth joke"
        }
    ];
    res.json(jokes);
});

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})  