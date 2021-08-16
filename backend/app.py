import json
from flask import Flask, request
from flask_cors import CORS
from flask_cors import cross_origin
import re
from flask import jsonify
from requests.models import Response
import types
app = Flask(__name__)
CORS(app, resources={r'/api/*': {'origins': '*'}})
app.config['CORS_HEADERS'] = 'Content-Type'
# NOTE: This route is needed for the default EB health check route

regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
string_check= re.compile('[@_!#$%^&*()<>?/\|}{~:]')
allowedDomains = ['@assuresoft.com', '@lendingfront.com', '@trueforce.com']

@app.route('/')
def home():
    return "ok"

@app.route('/api/verify_email', methods=["POST"])
@cross_origin()
def verifyEmail():
    email = json.loads(request.data)["email"]
    # user = json.loads(request.data)["userName"]
    password = json.loads(request.data)["password"]

    emailAnswer = None
    # userNameAnswer = None
    passwordAnswer = None
    emailCode = 0
    passwordCode = 0

    res = list(filter(email.endswith, allowedDomains)) != []
    if(re.fullmatch(regex, email)):
        if(res):
            emailAnswer = 'Allowed email'
        else:
            emailCode = 100
            emailAnswer = 'Valid email but invalid domain'
    else:
        emailAnswer = 'Invalid email'

    if(string_check.search(password) == None):
        passwordCode = 100
        passwordAnswer = 'The password must contain a special character'
    else:
        passwordAnswer = 'Valid password'

    response = jsonify({
        'emailAnswer': emailAnswer,
        'userNameAnswer': '',
        'passwordAnswer': passwordAnswer
    })
    
    return response


if __name__ == '__main__':
    app.run(port=8080)