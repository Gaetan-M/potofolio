var express=require('express');
var bodyParser =require('body-parser');
var cors =require('cors')
var knex=require('knex');
const bcrypt=require('bcrypt-nodejs')
var app=express();
var server=require('http').createServer(app);

const projets=[
   {
   	title:'Intralink',
   	description:'la description',
   	imageUrl:''
   },  
   {
  	title:'smartbrain',
   	description:'la description',
   	imageUrl:''
   },  
   {
   	title:'robotfriend',
   	description:'la description',
   	imageUrl:''
   },  
   {
   	title:'Calculator',
   	description:'la description',
   	imageUrl:''
   },  
   {
   	title:'Todolist',
   	description:'la description',
   	imageUrl:''
   }
 ]

 app.get('projet',(req,res)=>{
 console.log(req)
 })


 server.listen(8081, ()=> {
  console.log('server is running on port 8081');
})