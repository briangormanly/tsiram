## To create ...


webapp-template is a generic ready to roll web application. Node.js, postgres database. Secure login, google sso, responsive theme, profile editor with image upload and more. Ready to customize!

## Installation  

### Dependencies:
 * Postgres 
 * Node.js
 * That's it!

### Make it your own!
1. Do a global find / replace on "webapp-template" and replace with the name of your webapp (maintain case recommended)
2. Do a global find / replace on "webapp_template" and replace with the name of the database you wish to use. (maintain case recommended)
3. in the client folder change the theme folder name from "webapp-template" to your theme name, this new value must match the value in your .env.example FRONT_END_NAME = property and should have been replaced with the name you gave for your webapp in step 1.
4. Make of copy of the .env.example file in the project home folder named .env
    * Review the database connection information, make sure you have PostgreSQL running on your system
    * Note the SITE_PROTOCOL, SITE_HOST, and SITE_PORT adjust these values as needed
    * Make the SESSION_SECRET = a random string (~32 characters or less recommended) 
    * By Default google authentication / SSO is set to false if you wish to turn it on provide your GOOGLE_CLIENT_ID
    * You can configure the Email settings if you have an SMTP server setup and ready to go
    * Note there are other flags for OpenAI, GitHub and Stripe, these are stubs, there is some code in the template, for some of them but you will have to finish these builds if you want to use them.
    * save your .env file!
5. Create the database
    * psql -U postgres -f server/db/createDatabase.sql
6. Install dependancies -> npm i
7. Start the service -> npm start

----- output ------
>
> webapp-template running... {localhost:1986}
7. Navigate your web browser to http://localhost:PORT (default port is 1986) if you are running on your local machine.
8. Nice!


### Have fun!
