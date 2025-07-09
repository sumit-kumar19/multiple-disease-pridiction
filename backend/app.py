from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib
import os

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all routes (allowing requests from any origin)
CORS(app, support_credentials=True)

# Load the heart disease prediction model
def load_model(file_name='knn_heart_model.joblib'):
    path = os.path.join(os.path.dirname(__file__), file_name)
    return joblib.load(path)

def load_dmodel(file_name='knn_diabetes_model.joblib'):
    path = os.path.join(os.path.dirname(__file__), file_name)
    return joblib.load(path)

# Load models at the start
modeln = load_model()  # Heart disease model
modeld = load_dmodel()  # Diabetes model

# Heart disease prediction route
@app.route('/predict-heart', methods=['POST'])
def predict_heart():
    try:
        data = request.json['input']  # Get input data from the request
        user_input = np.array(data).reshape(1, -1)  # Ensure it's the right shape for the model
        prediction = modeln.predict(user_input)  # Make prediction using the heart disease model
        return jsonify({'prediction': int(prediction[0])})  # Return the prediction
    except Exception as e:
        print(f"Error in heart prediction: {e}")
        return jsonify({'error': str(e)}), 500

# Diabetes prediction route
@app.route('/predict-diabetes', methods=['POST'])
def predict_diabetes():
    try:
        data = request.json['input']  # Get input data from the request
        user_input = np.array(data).reshape(1, -1)  # Ensure it's the right shape for the model
        prediction = modeld.predict(user_input)  # Make prediction using the diabetes model
        return jsonify({'prediction': int(prediction[0])})  # Return the prediction
    except Exception as e:
        print(f"Error in diabetes prediction: {e}")
        return jsonify({'error': str(e)}), 500

# Health check endpoint
@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'message': 'API is running'})

if __name__ == '__main__':
    app.run()
