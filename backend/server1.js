var express=require('express');
var bodyParser =require('body-parser');
var cors =require('cors')
var knex=require('knex');
const bcrypt=require('bcrypt-nodejs')
var app=express();
var server=require('http').createServer(app);
var io=require('socket.io').listen(server)
var user;
var id;
const db=knex({
	client:'pg',
	connection:{
		host:'127.0.0.1',
		user:'postgres',
		password:'admin',
		database:'test'
	}
})
app.use(cors());
app.use(bodyParser.json());

app.post('/login',(req,res)=>{


	db.select('email','password').from('login')

	.where('email','=',req.body.email)

	.then(data=>{

		const isValid=bcrypt.compareSync(req.body.password,data[0].password);

		if(isValid){

		 return db.select('*').from('utilisateur')

			 .where('email','=',req.body.email)

			 .then(user=>{

			 	res.status(200).json(user[0])
			 })
			 .catch(err=>status(400).json('erroooor'))
		}else{
		res.status(400).json('wrong value')}
      })
})
app.post("/searchContact",(req,res)=>{

	db.select("username","id_utilisateur")
	.from("utilisateur")
	.where("username",'=',req.body.search)
	.returning('id','username')
	.then(info=>
		{
			id=info[0].id
		 res.status(200).json(info[0])
	    })
})
app.post('/register',(req,res)=>{
	const{platform,filiere,niveau,formation,firstname,lastname,username,email,password,number}=req.body;

	const hash=bcrypt.hashSync(password)
   db.transaction(trx=>{
   	trx.insert({
   		password:hash,
   		email:email
   	})
   	.into('login')
   	.returning('email')
   	.then(loginEmail=>{

      return trx('utilisateur')
		.returning('*')
			.insert({
				nom:firstname,
				prenom:lastname,
				number:Number(number),
				platform:req.body.plateform,
				filiere:req.body.filiére,
				niveau:Number(niveau),
				formation:formation,
		        email:loginEmail[0],
		        username:username,
		        joined:new Date() 
			}).then(user=>{
		     res.json(user);
		})
			.catch(err=>res.status(400).json('errooor '))
	})
	.then(trx.commit)
   .catch(trx.rollback)
   	})
   })
	
app.get('/message',(req,res)=>{

})
  io.on('connection',function(socket){
  socket.on('info',function(data){
  	user=data;
  	 socket.on(`${user}`,function(data){
  	 console.log(user,':',data.message)
  	 //save message in database
			db.insert({
			id_utilisateur:id,
			date_envoie: new Date(),
			destination_message:user,
			message:data.message
			})
			.into('message')
			.returning('*')
        // socket.emit(`${user}`,{message:data.message,forUser:'me'})
  	  	// socket.emit(`${data.user}`,{message:`${data.message}`,forUser:'you'})
  	  	socket.emit(`${data.user}`,{message:data.message,id:data.id})
  	  })	
    })

})

server.listen(8080, ()=> {
  console.log('server is running on port 8080');
})