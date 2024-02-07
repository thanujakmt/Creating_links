
from Application import app,User,db
from flask import render_template,request,url_for,redirect,Response,jsonify
import requests
import json


@app.route("/", methods = ["POST","GET"])
def link():
    users = User.query.all()
    return render_template("links.html",users = users)


@app.route('/profile')
def profile():
    return render_template('profile.html')
    

@app.route("/user/<int:id>", methods = ['GET'])
def get_user(id):
    id = id
    user = User.query.get(id)
    user = user.__dict__
    social_dict = {
        "instagram":{"icon":"fa-brands fa-instagram","color":"pink"},
        "github":{"icon":"fa-brands fa-github","color":"black"},
        "twitter":{"icon":"fa-brands fa-square-x-twitter","color":"black"},
        "facebook":{"icon":"fa-brands fa-facebook","color":"blue"}
    }
    user['social_icon'] = social_dict
    
    return render_template('profile.html',data = user)

@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.json
    Firstname = data['fName']
    Lastname = data['lName']
    email = data['email']
    image = data['image']
    social_media = data['social_links']
    new_user = User(Firstname=Firstname,Lastname=Lastname, Email=email,Image = image, Social_media = social_media)
    db.session.add(new_user)
    db.session.commit()
    user = User.query.filter_by(id = new_user.id).first()
    id = user.__dict__['id']
    fullUrl = f"{request.url_root}user/{id}"
    print(fullUrl)
    return Response(json.dumps({"status":200, "profileUrl":fullUrl}))