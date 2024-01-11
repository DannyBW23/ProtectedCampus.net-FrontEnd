from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, World!"

@app.route("/api/hello")
def api_hello():
    return jsonify({"message": "Hello, World"})

if __name__ == "main":
    app.run(debug=True)
# import time
# from flask import Flask, request,redirect, jsonify
# from flask_cors import CORS 

# app = Flask(__name__, static_folder='../build', static_url_path='/')

# CORS(app, resources={r"/api/*": {"origins": "*"}})
# @app.route('/api/convert-to-https', methods=['POST'])
# def convert_to_https():
#     data = request.get_json()
#     url = data.get('url')

#     if url and url.startswith('http://'):
#         https_url = url.replace('http://', 'https://', 1)
#         return jsonify({'httpsUrl': https_url})

#     return jsonify({'httpsUrl': url}) 
# @app.before_app_request
# def before_request():
#     if not request.is_secure:
#         url = request.url.replace("http://", "https://", 1)
#         return redirect(url, code=301)
#     if not request.is_secure:
#         url = request.url.replace("http://", "https://", 1)
#         return redirect(url, code=301)

# @app.route('/api/time', methods=["GET"])
# def get_current_time():
    
#     return {'time': time.time()}


