// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
// console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
// console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback


//this will send the static index.html page from the static folder
app.use('/static', express.static('static'))


// app.get('/', function(request, response) {
//     // just for fun, take a look at the request and response objects
//   //  console.log("The request object", request);
//   //  console.log("The response object", response);
//    // use the response object's .send() method to respond with an h1
//    response.send("<h1>Hello Express</h1>");
// })
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  // console.log("listening on port 8000");
})

// this is the line that tells our server to use the "/static" folder for static contentcopy
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// console.log(__dirname)

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/users", function (request, response){
  // hard-coded user data
  var users_array = [
      {name: "Michael", email: "michael@codingdojo.com"}, 
      {name: "Jay", email: "jay@codingdojo.com"}, 
      {name: "Brendan", email: "brendan@codingdojo.com"}, 
      {name: "Andrew", email: "andrew@codingdojo.com"}
  ];
  response.render('users', {users: users_array});
})

app.get("/cats", function (request, response){
  response.render('cats');
})

app.get("/garfield", function (request, response){

  var cat_array = [{
    favorite_food: "Lasange", 
    hobbies: "Sleeping, Messing with Odie, Pesturing Jon",
    about: "Garfield is an orange, fuzzy tabby cat born in the kitchen of an Italian restaurant (later revealed in the television special Garfield: His 9 Lives to be Mama Leoni's Italian Restaurant) who immediately ate all the pasta and lasagna in sight, thus developing his love and obsession for lasagna and pizza.[43][44]."
  } 
];
  response.render('garfield', {garfield: cat_array});
})

app.get("/bagheera", function (request, response){
  var cat_array = [
    {favorite_food: "Unknown", 
    friends: 'Mowgli, Baloo',
    about: 'Born in captivity in the menagerie of the Raja of Udaipur, Rajasthan, India, Bagheera begins to plan for his freedom after his mother dies. Once he is mature and strong enough, he breaks the lock on his cage and escapes into the jungle, where his ferocity and cunning nature win him the respect of all its other inhabitants, except for the very incredibly conceited Shere Khan The Tiger. Bagheera reveals all this to Mowgli later. None but Mowgli ever learn that Bagheera once wore a collar and chain, explaining the cats special insight concerning men. Bagheeras brief description of his imprisonment and escape is this, “I had never seen the jungle. They fed me behind bars from an iron pan till one night I felt that I was Bagheera - the Panther - and no mans plaything, and I broke the silly lock with one blow of my paw and came away; and because I had learned the ways of men, I became more terrible in the jungle than Shere Khan.” Because he had learned the ways of men, he was also more loving to the abandoned human child who came to be under his care and protection.'
  } 
];
  response.render('bagheera', {bagheera: cat_array});
})

app.get("/grumpy_cat", function (request, response){
  var cat_array = [{
    favorite_food: "Cat food", 
    hobbies: "Cynicism, Internet",
    about: "Tardar Sauce (born April 4, 2012),[1] commonly known as Grumpy Cat, is an American internet celebrity cat. She is known for her permanently 'grumpy' facial appearance, which is caused by an underbite and feline dwarfism.[1][2][3] She came to prominence when a photograph of her was posted on September 22, 2012 on social news website Reddit by Bryan Bundesen, the brother of her owner Tabatha Bundesen.[4][5] Lolcats and parodies created from the photograph by Reddit users went viral. She is the subject of a popular internet meme in which negative, cynical images are made from photographs of her.[6]"
  } 
];
  response.render('grumpy_cat', {grumpy_cat: cat_array});
})





