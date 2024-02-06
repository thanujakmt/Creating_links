
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Firstname = db.Column(db.String(80),  nullable=False)
    Lastname = db.Column(db.String(80), nullable=False)
    Email = db.Column(db.String(120), nullable=False)
    Image = db.Column(db.Text(), nullable = False)
    Social_media = db.Column(db.JSON, nullable = False)
        
    def __repr__(self):
        return f'<User {self.Firstname}>'

with app.app_context():
        db.create_all()

from Application import router