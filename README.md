# Creepy Coffee Shop - FSND CAPSTONE PROJECT

[https://coffeeshopcreepy.herokuapp.com/](https://coffeeshopcreepy.herokuapp.com/)
## Intro

This is a simple REACTJS + FLASK application, build to attend the specification of the Capstone Udacity Full Stack Web Development Degree's (FSND) project, which consist in demonstrate the acquired knowledge on the  following subjects:

```bash
* RESTFUL principles, use of HTTP methods (GET, POST, PATCH and DELETE);
* Use of SQLAlchemy to conduct databse queries;
* Use of AUTH0 thirdy party authentication tool, with Role Based Access Control (RBAC);
* Deployment on Heroku
```

The premise of the projct's API is to store, get, updade and delete  drinks recipes, the permission to access the information will be according to the users's role.
The user can be assigned to barist or manager roles.
The manager is allowed to access the menu (public get request), get drinks details (authorization required), delete drinks (authorization required), and update drinks (authorization required). The barist is only assigned to the public get request and to get drinks details.

Each drink will have the following attibutes:

```bash
id
title
color
name
parts
```


## Installing Dependencies

Python 3.9
Follow instructions to install the latest version of python for your platform in the python docs

Virtual Enviornment
We recommend working within a virtual environment whenever using Python for projects. This keeps your dependencies for each project separate and organaized. Instructions for setting up a virual enviornment for your platform can be found in the python docs

PIP Dependencies
Once you have your virtual environment setup and running, install dependencies by naviging to the /backend directory and running:

```bash
pip install -r requirements.txt
```

This will install all of the required packages we selected within the requirements.txt file.

In the project folder, run the following:

```bash
export FLASK_APP=app.py
export FLASK_ENV=development
flask run
```


### Running Unittest on the API endpoints

Tests have been created in order to test  the behavior of the endpoints.

In the project forlder, run the following:

```bash
python test_api.py
```



# RBAC and API testing

1. Login into app

Acessing  the app and testisting  the endpoints that requires  specific permissions, two email accounts were created specially for reviewers. 

Manager Login (can get details,  add, edit, remove drinks from database)

* email: *****
* password:****

Barist login (can only get details):

* email: *****
* password:**

The .env file contains JWT tokens in case yo want to test the api endpoints on your local machine.

2. API Endpoints

Base URL:
[https://coffeeshopcreepy.herokuapp.com/](https://coffeeshopcreepy.herokuapp.com/)

HTTP Status Code
200 - OK 
400 - Bad Request 
401 - Unauthorized 
403 - Forbidden 
404 - Not Found 
422 - Unprocessable

- GET drinks (GET Method) - public endpoint:

This endpoint will only retrive the drink's title.

```bash
http://127.0.0.1:5000/drinks
```
```bash
{"success": true, 
"drinks": ["Coffee", "Milkshake", "Cosmo", "Hot Chocolate"]}
```
- Get drinks detail  (GET Method) -it  requires permission ( get:drinks-details):

It will retrive all drink's titles and its correspondent recipes from database.

```bash
http://127.0.0.1:5000/drinks-detail
```

- Add drinks (POST Method) - it requires permission ( post:drinks):

To insert a new drink into database it will require to pass at leas

```bash
http://127.0.0.1:5000/post-drinks
```

Request requirements 
```bash
body:
{
     Title: 'anyTitle',
     recipe: {
          color: "ingredient color",
          name: "ingrediente\ name",
          part: "how many parts"

     }
}
headers:
{
     'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + [ACCESS TOKEN]
}
```

- Edit drink (PATCH Method) - it requires permission patch:drinks

```bash
http://127.0.0.1:5000/drinks-update/[id]
```

```bash
body:
{
     Title: 'anyTitle',
     recipe: {
          color: "ingredient color",
          name: "ingredient name",
          part: "how many parts"

     }
}
headers:
{
     'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + [ACCESS TOKEN]
}
```

-Remove a drink (DELETE Method) - it requires permission delete:drinks

```bash
http://127.0.0.1:5000/drinks-delete/[id]
```

```bash
headers:
{
     'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + [ACCESS TOKEN]
}
```


This project was create by Ana Gabriele Singh