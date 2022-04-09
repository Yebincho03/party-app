Link for the website
https://wmdd4936-yebincho.herokuapp.com/

Instructions for building and running the project;
step 1: npm init -y step 2: npm install nodemon step 3: npm run start step 4: npm run watch

Description of the App
This is a party app that you can host your own party and also join other open party

Features I'm proud of
Login function
Create account function
Add Photo function

How to use
Create an account
Login
host the party
go to profile page

API documentation


'api/vi/profile/' POST This API posts the body from the client side to create user accounts 

'api/vi/profile/:id' GET This API get one user registered in this application by the id 

'/api/v1/profile/hosting/:id' GET This API is used to get the current user hosting party list by hosting id

'/api/v1/login' POST This API is used to check the user information matches the user information on the database. 

'/api/v1/getParty' GET This API is used to get all the parties. 

'/api/v1/newParty' POST This API is used to create a new party

