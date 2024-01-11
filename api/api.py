import time
from flask import Flask, request,redirect, jsonify
from flask_cors import CORS 

app = Flask(__name__)

CORS(app)
@app.route('/api/convert-to-https', methods=['POST'])
def convert_to_https():
    data = request.get_json()
    url = data.get('url')

    if url and url.startswith('http://'):
        https_url = url.replace('http://', 'https://', 1)
        return jsonify({'httpsUrl': https_url})

    return jsonify({'httpsUrl': url}) 
# @app.before_app_request
# def before_request():
#     if not request.is_secure:
#         url = request.url.replace("http://", "https://", 1)
#         return redirect(url, code=301)
#     if not request.is_secure:
#         url = request.url.replace("http://", "https://", 1)
#         return redirect(url, code=301)

@app.route('/api/time', methods=["GET"])
def get_current_time():
    
    return {'time': time.time()}


