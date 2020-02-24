// Get all of our user data
var data = require('../data.json');

exports.newUser = function(request, response) {    
	console.log(data);
	var email = request.query.email;
	var username = request.query.username;
	var password = request.query.password;
	var newUser = {"email": email, "username": username, "password": password};
	data.users.push(newUser);
	response.render('survey');
}

