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
  * and to download the source code