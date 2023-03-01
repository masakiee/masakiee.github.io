import express from 'express'


const app = express();

app.use(express.static('docs'));
app.listen(3000, () => {
    console.log('server started http://localhost:3000')
});