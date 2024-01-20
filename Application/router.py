
from Application import app
from flask import render_template
import requests

@app.route("/", methods = ["POST","GET"])
def link():
    return render_template("links.html")

@app.route("/profile", methods = ["POST","GET"])
def profile():
    return render_template("profile.html")