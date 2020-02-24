var data = require("../data.json");

exports.view = function(request, response) {
    var name = request.query.name;
    var gender = request.query.gender;
    var height = request.query.height;
    var weight = request.query.weight;


    editDetails(data.users[findUser(name, data.users)], name, gender, height, weight);
}

    function editDetails(array_index, name, gender, height, weight) {
        data.users[array_index].name = name;
        data.users[array_index].gender = gender;
        data.users[array_index].height = height;
        data.users[array_index].weight = weight;
    }

    function findUser(name, array){
        for (let i = 0; i < data.users.length; i++) {
            if (data.users[i].name === name) {
                return i;
            }
        }
    }