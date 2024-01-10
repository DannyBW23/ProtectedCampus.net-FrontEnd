import time
from flask import Flask, request,redirect
from flask_cors import CORS 

app = Flask(__name__)

@app.before_app_request
def before_request():
    if not request.is_secure:
        url = request.url.replace("http://", "https://", 1)
        return redirect(url, code=301)
    if not request.is_secure:
        url = request.url.replace("http://", "https://", 1)
        return redirect(url, code=301)

@app.route('/api/time', methods=["GET"])
def get_current_time():
    
    return {'time': time.time()}


