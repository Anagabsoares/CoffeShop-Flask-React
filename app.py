import os
import sys
sys.path.append(os.getcwd())
from flask import Flask, request, jsonify, abort
from sqlalchemy import exc
import json
from flask_cors import CORS, cross_origin


from models import setup_db, Drink
from  auth import AuthError, requires_auth


def create_app(test_config=None):
    app = Flask(__name__,static_folder='./my-react-app/build', static_url_path='/')
    setup_db(app)
    CORS(app)


    @app.route('/')  
    def index():
        return app.send_static_file('index.html')

    @app.route("/drinks", methods=["GET"])
    @cross_origin()
    def get_all_drinks():
        drinks = Drink.query.all()
        
        try:
            return (
                json.dumps(
                    {"success": True, "drinks": [drink.title for drink in drinks]}
                ),
                200
            )
        except:
            abort(400)

    @app.route("/post-drinks", methods=["POST"])
    @cross_origin()
    @requires_auth("post:drinks")
    def drink_post(jwt):
        body = dict(request.form or request.json or request.data)
        new_drink_title = body.get("title", None)
        new_recipe_drink = body.get("recipe", None)
        if new_drink_title is  '':
            abort(422)
        try:
            drink = Drink(title=new_drink_title, recipe=json.dumps([new_recipe_drink]))           
            drink.insert()
            return(
                 json.dumps({"success": True, "newly_created_drink": drink.long()}), 200)          
        except Exception:
            abort(422)

    @app.route("/drinks-detail", methods=["GET"])
    @cross_origin()
    @requires_auth("get:drinks-detail")
    def drinks_detail(jwt):
        drinks = Drink.query.all()
        try:
            return (
                json.dumps(
                    {"success": True, "drinks": [drink.long() for drink in drinks]}
                ),
                200,
            )
        except Exception:
            abort(400)


    @app.route("/drinks-update/<int:id>", methods=["PATCH"])
    @cross_origin()
    @requires_auth("patch:drinks")
    def update_drinks(jwt, id):
            id = id
            drink = Drink.query.filter(Drink.id==id).one_or_none()

            if drink is None:
                abort(404)
            try:
                body = dict(request.form or request.json or request.data)
                updated_recipe = body.get("recipe", None)
                updated_title = body.get("title", None)
                if updated_recipe:
                    drink.recipe = json.dumps(updated_recipe)
                if updated_title:
                    drink.title = updated_title
                drink.update()

                return (json.dumps({"success": True, "drinks": drink.long()}), 200)

            except Exception:
                abort(422)


    @app.route("/drinks-delete/<int:drink_id>", methods=["DELETE"])
    @cross_origin()
    @requires_auth("delete:drinks")
    def delete_drink(jwt, drink_id):
       
        drink = Drink.query.filter(Drink.id ==drink_id).one_or_none()

        if drink is None:
            abort(404)
        else:     
            try:
                drink.delete()

                return( json.dumps(
                        {
                            "success": True,
                            "deleted": drink.id,
                        }),200)  
            except Exception:
                abort(400)

    ## Error Handling

    @app.errorhandler(404)
    def not_found(error):
        return app.send_static_file('index.html')

    @app.errorhandler(422)
    def unprocessable(error):
        return(
            json.dumps({"success": False, "error": 422, "message": "unprocessable"}),
            422)
        
    @app.errorhandler(400)
    def bad_request(error):
        return( 
            json.dumps({"success": False, "error": 400, "message": "bad request"}),
         400)

    @app.errorhandler(500)
    def internal_service_error(error):
        return(
            json.dumps(
                {"success": False, "error": 500, "message": "internal server error"}),
            500)
       
    @app.errorhandler(401)
    def unauthorized_error(error):
        return (
            json.dumps(
                {"success": False, "error": 401, "message": "unauthorized"}),
            401)   

    @app.errorhandler(AuthError)
    def auth_error(error):
        response = jsonify(error.error)
        response.status_code = error.status_code
        return response

    return app

app = create_app()

if __name__=='__main__':
        app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 8000) )
