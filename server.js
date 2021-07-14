const express = require('express');
const app = express();
const data = require("./data.json")//mocando dados que geramente são consumidos em um BD

app.use(express.json()); //usar notação json

//clients é o endpoint
app.get("/clients", function (req, res){
    res.json(data);
})

app.get("/clients/:id", function (req, res){
    const {id} = req.params;
    const client = data.find(cli => cli.id == id);
    if(!client) return res.status(204).json(); //se não achar o cliente devolve um 204
    res.json(client);
})

app.post("/clients", function (req, res){
    const {name, email} = req.body;
   
    //... codificação para salvar cliente ...

    res.json({name,email});
})

app.put("/clients/:id", function (req, res){
    const {id} = req.params;
    const client = data.find(c => c.id == id);
    if(!client) return res.status(204).json();
    const{name} = req.body;
    client.name = name;
    res.json(client);
})

app.delete("/clients/:id", function (req, res){
    const {id} = req.params
    const clientsFiltered = data.filter(c => c.id != id);
    res.json(clientsFiltered)
})


app.listen(3000, function(){
    console.log("Server is running")
})