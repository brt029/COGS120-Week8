var data = require("../data.json");

exports.addUser = function(request, response) {    
	console.log(data);
	var email = request.query.email;
	var username = request.query.username;
	var password = request.query.password;
	//var newUser = {"email": email, "username": username, "password": password};
	//data.users.push(newUser);
	//response.render('survey');
	var name = request.query.name;
	var gender = request.query.gender;
	var height = request.query.height;
	var weight = request.query.weight;
	var newUser = {"email": email, "username": username, "password": password, "name": name, "gender": gender, "height": height, "weight": weight};
	//var newUser = {"name": name, "gender": gender, "height": height, "weight": weight};
	data.users.push(newUser);
	response.render('home');
 }