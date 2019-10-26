from flask import Flask, jsonify
from flask_cors import CORS

app = Flask (__name__)
CORS(app)
@app.route('/' , methods=['POST', 'GET','OPTIONS'] ) 
def helloworld ():
    a = {"age": 24, "isEmployed": "true", "name": "Sarah"}
    return  a
if __name__ == "__main__":
    app.run
© 2019 GitHub, Inc.