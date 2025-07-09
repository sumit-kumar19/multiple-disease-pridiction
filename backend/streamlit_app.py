import streamlit as st
import numpy as np
import joblib
import os

# Load models
def load_model(file_name):
    path = os.path.join(os.path.dirname(__file__), file_name)
    return joblib.load(path)

heart_model = load_model("knn_heart_model.joblib")
diabetes_model = load_model("knn_diabetes_model.joblib")

st.title("Multiple Disease Prediction System")

disease = st.selectbox("Select Disease", ["Heart Disease", "Diabetes"])

if disease == "Heart Disease":
    st.subheader("Heart Disease Inputs")
    age = st.number_input("Age", 1, 120)
    sex = st.selectbox("Sex (0 = Female, 1 = Male)", [0, 1])
    cp = st.number_input("Chest Pain Type", 0, 3)
    trestbps = st.number_input("Resting Blood Pressure")
    chol = st.number_input("Cholesterol")
    fbs = st.selectbox("Fasting Blood Sugar > 120", [0, 1])
    restecg = st.number_input("Resting ECG", 0, 2)
    thalach = st.number_input("Max Heart Rate Achieved")
    exang = st.selectbox("Exercise Induced Angina", [0, 1])
    oldpeak = st.number_input("ST Depression")
    slope = st.number_input("Slope", 0, 2)
    ca = st.number_input("Number of Major Vessels", 0, 3)
    thal = st.number_input("Thal", 0, 3)

    if st.button("Predict Heart Disease"):
        features = np.array([age, sex, cp, trestbps, chol, fbs, restecg,
                             thalach, exang, oldpeak, slope, ca, thal]).reshape(1, -1)
        prediction = heart_model.predict(features)
        st.success(f"Prediction: {'Positive' if prediction[0] else 'Negative'}")

elif disease == "Diabetes":
    st.subheader("Diabetes Inputs")
    pregnancies = st.number_input("Pregnancies", 0)
    glucose = st.number_input("Glucose")
    bp = st.number_input("Blood Pressure")
    skin = st.number_input("Skin Thickness")
    insulin = st.number_input("Insulin")
    bmi = st.number_input("BMI")
    dpf = st.number_input("Diabetes Pedigree Function")
    age = st.number_input("Age", 1, 120)

    if st.button("Predict Diabetes"):
        features = np.array([pregnancies, glucose, bp, skin,
                             insulin, bmi, dpf, age]).reshape(1, -1)
        prediction = diabetes_model.predict(features)
        st.success(f"Prediction: {'Positive' if prediction[0] else 'Negative'}")
