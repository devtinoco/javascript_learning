// Fetch y peticiones a servicios / apis rest
var div_users = document.getElementById("usuarios");

getUsers()
  .then(data => data.json())  //we make a callback function called data and we convert it to json
  .then(users => {            //we open the callback function and we say that usuarios equals to data to store
    // usuarios = users.data; //all the users in an array
    // console.log(usuarios);//we log the users to see if the fetch has been done correctly
    listUsers(users.data);
    
    return getUser2();
  })
  .then(data => data.json())
  .then(user => {
    listUser2(user.data); 

    return getInfo();
  })
  .then(data => {
    console.log(data);
    
  });

function getInfo(){
  var programador = {
    name: "Víctor",
    surname: "Moreno",
    url: "http://devtinoco.es"
  };
  //CREAR PROMESAS
return new Promise((resolve, reject) => {
  var programador_string = JSON.stringify(programador);

  if(programador_string != 'string'){
    return reject('error');
    
  } else {
    return resolve(programador_string);
  }
});
  
}

function getUsers(){
  return fetch('https://reqres.in/api/users');
}

function getUser2(){
  return fetch('https://reqres.in/api/users/2');
}

function listUsers(usuarios){
  usuarios.map(function (user, i) {
    let name = document.createElement('h2');

    name.innerHTML = i +'.' + ' ' + user.first_name + ' ' + user.last_name;

    div_users.appendChild(name);
  });
}

function listUser2(user){
  
    let name = document.createElement('h2');

    name.innerHTML = user.first_name + ' ' + user.last_name;

    div_users.appendChild(name);
}