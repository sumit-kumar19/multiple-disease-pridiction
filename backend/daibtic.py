# Import necessary libraries
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
import joblib

# Load the dataset from CSV
def load_data(csv_file):
    data = pd.read_csv(csv_file)
    return data

# Preprocess the data
def preprocess_data(df):
    # Separate features (X) and label (y)
    X = df[['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age']]
    y = df['Outcome']  # 'Outcome' is the target column
    return X, y

# Train the KNN model
def train_knn(X_train, y_train, n_neighbors=5):
    knn = KNeighborsClassifier(n_neighbors=n_neighbors)
    knn.fit(X_train, y_train)
    return knn

# Export the model to a file
def export_model(model, file_name='knn_diabetes_model.joblib'):
    joblib.dump(model, file_name)

# Load the model from a file
def load_model(file_name='knn_diabetes_model.joblib'):
    return joblib.load(file_name)

# Predict using the user input
def predict_diabetes(model):
    print("Please enter the following details for prediction:")
    pregnancies = int(input("Number of Pregnancies: "))
    glucose = float(input("Glucose level: "))
    blood_pressure = float(input("Blood Pressure (mm Hg): "))
    skin_thickness = float(input("Skin Thickness (mm): "))
    insulin = float(input("Insulin level: "))
    bmi = float(input("BMI (Body Mass Index): "))
    diabetes_pedigree = float(input("Diabetes Pedigree Function: "))
    age = int(input("Age: "))
    
    # Create a feature vector based on the input
    user_data = [[pregnancies, glucose, blood_pressure, skin_thickness, insulin, bmi, diabetes_pedigree, age]]
    
    # Use the model to predict the outcome
    prediction = model.predict(user_data)
    
    # Output the result
    if prediction[0] == 1:
        print("Prediction: The patient is likely diabetic.")
    else:
        print("Prediction: The patient is NOT diabetic.")

# Example usage
if __name__ == '__main__':
    # Step 1: Load the dataset
    data = load_data('./diabetes.csv')  # Replace with your dataset file path

    # Step 2: Preprocess the data
    X, y = preprocess_data(data)

    # Step 3: Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Step 4: Train the KNN model
    knn_model = train_knn(X_train, y_train, n_neighbors=5)

    # Step 5: Export the model to a file
    export_model(knn_model, 'knn_diabetes_model.joblib')

    # Step 6: Load the model from the file
    loaded_knn_model = load_model('knn_diabetes_model.joblib')

    # Step 7: Make predictions using the user input
    predict_diabetes(loaded_knn_model)

    # Step 8: Evaluate the model (optional, testing with original test set)
    y_pred = loaded_knn_model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f'Model Accuracy on test data: {accuracy * 100:.2f}%')
