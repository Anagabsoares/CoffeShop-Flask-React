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



# RBAC

Acessing  the app and testisting  the endpoints that requires  specific permissions, two email accounts were created specially for reviewers.

Manager Login (can get details,  add, edit, remove drinks from database)

* email: *****
* password:****

Barist login (can only get details):

* email: *****
* password:**




## Testing API endpoints 

This app  is live at:
[https://coffeeshopcreepy.herokuapp.com/](https://coffeeshopcreepy.herokuapp.com/)






 
