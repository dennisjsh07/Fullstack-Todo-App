const express = require('express');
const bodyParesr = require('body-parser');

const app = express();

app.use(bodyParesr.json());

app.get("/", (req, res)=>{
    res.send('hello world');
});

app.get("/:id", (req, res)=>{
    const id = req.params.id;
    console.log(id);
    res.status(200).json({});
})

app.post('/addtodos', (req, res)=>{
    const {title, description} = req.body;
    console.log(title, description);
    res.status(200).json({});
})

app.put("/:id", (req, res)=>{
    const id = req.params.id;
    console.log(id);
    res.status(200).json({});
})

app.listen(3000, ()=> {
    console.log("app running on port 3000");
})