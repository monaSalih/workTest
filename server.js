'use strict'


const express=require('express');
require('dotenv').config();
const dataRead=require('./assets/data.json')
 const server=express();
 const PORT=process.env.PORT
 server.get('/',(req,res)=>{
     res.send('home route')
 })
//localhost:3001/test
server.get('/test',(req,res)=>{
    res.send('your server is working')
})
//localhost:3001/getShoppingData
server.get('/getShoppingData',(req,res)=>{
let shoopingArray=['shoes','bag','toys']
    res.status(404).send(shoopingArray)
})
//localhost:3001/getDataFromPoke?pokeName=bulbasaur
server.get('/getDataFromPoke',(req,res)=>{
console.log('test function work111');
console.log(req.query);
let queryName=req.query.pokeName
let newCharacter=dataRead.results.find(char=>{
    console.log(queryName);
    console.log('test function work2222222');
    if(char.name.toLowerCase()===queryName){
       
        return char;
    }
})
res.send(newCharacter)
 
})
server.get('*',(req,res)=>{
    res.status(404).send('this route dosnt exist pls try again')
})
// server.get('/',(req,res))
 server.listen(PORT,()=>{
     console.log(`${PORT} is work now`);
 })