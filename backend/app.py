# from flask import Flask, request, jsonify
# from flask_cors import CORS  # Import Flask-CORS
# import numpy as np
# import joblib
# # Initialize Flask app
# app = Flask(__name__)

# # Enable CORS for all routes
# CORS(app, origins=["http://localhost:5173"])  # Only allow requests from your React app

# def load_model(file_name='knn_heart_model.joblib'):
#     return joblib.load(file_name)

# def load_dmodel(file_name='./knn_diabetes_model.joblib'):
#     return joblib.load(file_name)

# modeln = load_model()  # Load the model
# modeld= load_dmodel()

# @app.route('/predict-heart', methods=['POST'])
# def predict():
#     data = request.json['input']
#     user_input = np.array(data).reshape(1, -1)  # Ensure it's the right shape
#     # prediction = heart_disease_model.predict(user_input)  # Uncomment and use your model

#     prediction = modeln.predict(user_input) # For testing, mock the prediction as 1 (replace with actual model)

#     return jsonify({'prediction': int(prediction[0])})

# @app.route('/predict-diabetes', methods=['POST'])
# def predict():
#     data = request.json['input']
#     user_input = np.array(data).reshape(1, -1)  # Ensure it's the right shape
#     # prediction = heart_disease_model.predict(user_input)  # Uncomment and use your model

#     prediction = modeld.predict(user_input) # For testing, mock the prediction as 1 (replace with actual model)

#     return jsonify({'prediction': int(prediction[0])})

# if __name__ == '__main__':
#     # Load the model

#     app.run(debug=True)



# from flask import Flask, request, jsonify
# from flask_cors import CORS  # Import Flask-CORS
# import numpy as np
# import joblib

# # Initialize Flask app
# app = Flask(__name__)

# # Enable CORS for all routes (allowing requests from your React app)
# CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# # Load the heart disease prediction model
# def load_model(file_name='knn_heart_model.joblib'):
#     return joblib.load(file_name)

# # Load the diabetes prediction model
# def load_dmodel(file_name='./knn_diabetes_model.joblib'):
#     return joblib.load(file_name)

# # Load models at the start
# modeln = load_model()  # Heart disease model
# modeld = load_dmodel()  # Diabetes model

# # Heart disease prediction route
# @app.route('/predict-heart', methods=['POST'])
# def predict_heart():
#     data = request.json['input']  # Get input data from the request
#     user_input = np.array(data).reshape(1, -1)  # Ensure it's the right shape for the model
#     prediction = modeln.predict(user_input)  # Make prediction using the heart disease model
#     return jsonify({'prediction': int(prediction[0])})  # Return the prediction

# # Diabetes prediction route
# @app.route('/predict-diabetes', methods=['POST'])
# def predict_diabetes():
#     data = request.json['input']  # Get input data from the request
#     user_input = np.array(data).reshape(1, -1)  # Ensure it's the right shape for the model
#     prediction = modeld.predict(user_input)  # Make prediction using the diabetes model
#     return jsonify({'prediction': int(prediction[0])})  # Return the prediction

# if __name__ == '__main__':
#     app.run(debug=True)






from flask import Flask, request, jsonify
from flask_cors import CORS  # Import Flask-CORS
import numpy as np
import joblib

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all routes (allowing requests from any origin)
CORS(app, support_credentials=True)

# Load the heart disease prediction model
def load_model(file_name='knn_heart_model.joblib'):
    return joblib.load(file_name)

# Load the diabetes prediction model
def load_dmodel(file_name='./knn_diabetes_model.joblib'):
    return joblib.load(file_name)

# Load models at the start
modeln = load_model()  # Heart disease model
modeld = load_dmodel()  # Diabetes model

# Heart disease prediction route
@app.route('/predict-heart', methods=['POST'])
def predict_heart():
    data = request.json['input']  # Get input data from the request
    user_input = np.array(data).reshape(1, -1)  # Ensure it's the right shape for the model
    prediction = modeln.predict(user_input)  # Make prediction using the heart disease model
    return jsonify({'prediction': int(prediction[0])})  # Return the prediction

# Diabetes prediction route
@app.route('/predict-diabetes', methods=['POST'])
def predict_diabetes():
    try:
        data = request.json['input']  # Get input data from the request
        user_input = np.array(data).reshape(1, -1)  # Ensure it's the right shape for the model
         # Debugging log
        prediction = modeld.predict(user_input)  # Make prediction using the diabetes model
         # Debugging log
        return jsonify({'prediction': int(prediction[0])})  # Return the prediction
    except Exception as e:
        print(f"Error: {e}")  # Print error
        return jsonify({'error': str(e)}), 500  # Return error response

if __name__ == '__main__':
    app.run(debug=True)
