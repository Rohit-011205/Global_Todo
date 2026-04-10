import express from 'express';
import cors from 'cors';
import taskRoutes from './Routes/task.js';

    
const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT = 5000;


app.use(taskRoutes);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})