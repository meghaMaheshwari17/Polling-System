# Polling System
This is Polling API created using ExpressJS and MongoDB database, where user can add question and options to them, and vote for the options he/she wants.

### Features
* User can add Questions
* User can add Options to questions
* User can delete Questions
* User can delete Options
* User can vote for particular option through the link
* User can fetch the Questions

### Setup On local
* Install Node
* Install MongoDB
* Open project folder in VS Code
* Open Terminal
* Run command "npm install" 
* Run command "npm start" to start the server
* Server will start at port 8000 of localhost
* Use postman to play with API

### Following are the routes which can be used
*	/questions/ (To view all the questions and their options)
##### (Use request type: GET )
*	/questions/create  (To create a question)
##### (Use request type: POST, send the question in body with key "title" )
*	/questions/:id/options/create  (To add options to a specific question)
##### (Use request type: POST, send the option in body with key "text" )
*	/questions/:id/delete (To delete a question)
##### (Use request type: DELETE)
*	/options/:id/delete (To delete an option)
##### (Use request type: DELETE)
*	/options/:id/add_vote (To increment the count of votes)
##### (Use request type: PUT)
*	/questions/:id (To view a question and its options)
##### (Use request type: GET)
