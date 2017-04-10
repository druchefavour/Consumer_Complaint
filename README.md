# Resolve: A Consumer Complaint App

## Overview

## PAGE TO TAKE COMPLAINTS BY CONSUMERS (MongoApp folder)
This Page will be created using MongoDB, Node.js and ExpressJs. All the codes are included in a folder called MongoApp. 

### Public Folder
* Inside MongoApp, create a folder called: public
  * Inside public, create an html file called ```index.html```
  * Mobile-responsive design: To ensure proper rendering and touch zooming, add the ```<meta>``` tag inside the ```<head>``` element
  * Inside ```index.html``` include bootstrap css framework [bootstrap](http://getbootstrap.com/getting-started/)
  * Create the .container class to provide a responsive fixed width container.  
  * Navabar: Create a Right-Aligned Navigation Bar

#### Place Autocomplete Address Form
* Inside ```index.html```, create place autocomplete address form to capture consumers address/ location (use [Google Maps APIs](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform#try-it-yourself))
* Create a css folder
  * Inside the css folder create the file ```addressStyle.css```
* Create a js folder
  * Inside the js folder create the file ```addressScript.css```

#### Coding Date Parameter in the Form
Here we use Bootstrap 3 Datepicker [Bootstrap Datepicker](http://eonasdan.github.io/bootstrap-datetimepicker/) to create time functionalty. This enables the user to log the time of submission of the form. 
##### Procedure
* Install bower package using: bower install eonasdan-bootstrap-datetimepicker#latest --save
* Include jQuery and Boostrap files.
* include moment.js
* Use the [enabled/disabled dates](http://eonasdan.github.io/bootstrap-datetimepicker/#enableddisabled-dates) code to create the datetimepicker.

## Creating MongoDB for loading Consumer Complaint 
* Create a models folder
* Inside the folder, create two models one for loading user information - ```user.js``` and the other for loading the complaint data- ```complaint.js```.
* ```user.js``` will take the following parameters: firstname, lastname, useremail, logintime, and useraddress
* ```complaint.js``` will take the following parameters: companyname, productname, complainttitle and complaintinput

* Create ```server.js```.
* Inside ```server.js```, require the dependencies: express, bodyParser, morgan and mongoose
* Include the Models: Complaint and User
* Set mongoose to leverage built in JavaScript ES6 Promises
* Initialize Express
* Use morgan and body parser with the app
* Make public a static dir
* Create mongo database called consumerCompdb.
* Configure database with mongoose
* Write a script to show any mongoose errors
* Write a script that once logged in to the db through mongoose, a success message would be logged
* Create a new user by using the User model as a class - The "unique" rule in the User model's schema will prevent duplicate users from being added to the server - This uses the save method.

### Routes
Creating routes for our model.
* Use GET method to
  * Create a route to see complaints users have added
  * Create a route to see what user looks like without populating
* Use POST method to
  * Create new complaint
* Use GET route to see what user looks like WITH populating

### Running program
* run npm init to create package.json file
* Install dependencies
  * Express
  * Bodyparser
  * Morgan
  * Mongoose
  * This will create node modules file
* run app (node ```server.js```) and listen at port 3000


## CHART RENDERING
## Things Required
In order to render the manager's dashboard which contains various charts, the following are required:

Run npm init to create package.json file.

  * We need to install Node.js
  * Install ExpressJS using $ npm install express (This will create the file node modules) and
  * Install MongoDB

Other processes required include:
  * To populate data in MongoDB
  * To create REST API for data retrieval
  * To create views for rendering the chart

## Import Data
The MongoDB created is a JSON based document store, the data to be populated is created in the form of an array of JSON objects. 

To populate this data into the MongoDB we make use of another tool called: mongoimport provided by MongoDB. 

name of the database (-d dataCompdb)
name of the collection (-c Logged Complaints)
type of the input data (--type json)
location of the file containing data (--file complaint.json)
option to indicate input is JSON array (--jsonArray)

```$ mongoimport -d dataCompdb -c Logged Complaints --type json --file complaint.json --jsonArray```

## Validation
Confirm if the data really got inserted by running a few queries:
  * > use dataCompdb                                    
   switched to db dataCompdb
  * > show collections
   logged_complaints
   system.indexes
  * > db.logged_complaints.find();
This displays the data in the database:
![Image of Database](https://github.com/druchefavour/Consumer_Complaint/blob/master/mongoApp/public/image/datbase_pic.PNG)

## Creating REST API for data retrieval
Now we have the required data in our db. Let us create REST API using ExpressJS to consume the data from MongoDB.

Install mongodb by using the command: $ npm install mongodb

In order to develop the REST API, we follow the steps below:
  * Import the express and mongodb packages to be used in the application
  * Connect to MongoDB instance running locally
  * Implement method to fetch the data from Database
    * While we implement the method to fetch db, we also need to parse and construct the object so that we are able to use it for rendering the multi series line chart. The multi series line chart we are going to draw requires an array of labels, multiple arrays of values where each array indicates a series:
     * We have to transform the series into the form which will help us bind to the chart

  * Create express server and REST API end-point
    * We expose the REST API at the URL /loggedComplaints. We will modify the getData() method by adding an additional parameter to the method. This additional parameter is the response object. We are going to write the JSON object created in getData() method to the response object so that it is sent to the client invoking the API.
  * Launch the express app on a port

  The server is up on http://localhost:3300 and when we open the URL http://localhost:3300/loggedCompaints in the browser, we find the JSON response of the API.





