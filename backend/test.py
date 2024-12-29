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

# Preprocess the data (assuming no categorical data and no missing values)
def preprocess_data(df):
    X = df.drop(columns=['target'])  # Assuming 'target' is the label column
    y = df['target']
    return X, y

# Train the KNN model
def train_knn(X_train, y_train, n_neighbors=5):
    knn = KNeighborsClassifier(n_neighbors=n_neighbors)
    knn.fit(X_train, y_train)
    return knn

# Export the model to a file
def export_model(model, file_name='knn_heart_model.joblib'):
    joblib.dump(model, file_name)

# Load the model from a file
def load_model(file_name='knn_heart_model.joblib'):
    return joblib.load(file_name)

# Example usage
if __name__ == '__main__':
    # Step 1: Load the dataset
    data = load_data('./heart.csv')  # Replace with your dataset file path

    # Step 2: Preprocess the data
    X, y = preprocess_data(data)

    # Step 3: Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Step 4: Train the KNN model
    # knn_model = train_knn(X_train, y_train, n_neighbors=5)

    # Step 5: Export the model to a file
    # export_model(knn_model, 'knn_heart_model.joblib')

    # Step 6: Load the model from the file
    loaded_knn_model = load_model('knn_heart_model.joblib')

    # Step 7: Make predictions using the loaded model
    y_pred = loaded_knn_model.predict(X_test)

    print(y_pred)

    # Step 8: Evaluate the model
    accuracy = accuracy_score(y_test, y_pred)
    print(f'Model Accuracy: {accuracy * 100:.2f}%')
