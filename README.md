<h1 align="center" id="title">Multiple Disease pridiction</h1>

<p align="center"><img src="https://socialify.git.ci/sumit-kumar19/multiple-disease-pridiction/image?font=Source+Code+Pro&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Solid&amp;stargazers=1&amp;theme=Auto" alt="project-image"></p>

<p id="description">This project is a web application designed to predict the likelihood of various diseases based on user input.</p>

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Disease Prediction: Allows users to input their symptoms or medical data to predict the likelihood of multiple diseases using machine learning models.
*   User-Friendly Interface: Intuitive and easy-to-use interface for seamless navigation and data input.
*   Real-Time Predictions: Provides instant results based on the entered data.
*   Customizable Data Inputs: Supports input for various health parameters like age gender symptoms and medical history.
*   Responsive Design: Fully responsive and compatible with all devices including desktops tablets and smartphones.


  # Installation Guide for Multiple Disease Prediction

Follow the steps below to set up the **Multiple Disease Prediction** project on your local machine:

---

### Step 1: Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/sumit-kumar19/multiple-disease-pridiction.git
```
### Step 2: Navigate to the Project Directory
Move into the project directory:
```bash
cd multiple-disease-pridiction
```
### Step 3: Backend Setup
Navigate to the Backend Directory:

```bash
cd backend

```
Create a Virtual Environment:

```
python -m venv venv
```

### Install Required Python Packages:
 intall all the library included
```

pip install 
```

### Run the Backend Server:

```bash
python app.py
```

### Step 4: Frontend Setup
1.Navigate to the Frontend Directory:

```bash
cd ../frontend
```
2.Install Required Node Modules:

```bash
npm install
```
4.Start the Frontend Server:
```bash
npm run dev
```
5. Access the Application
Open your web browser and navigate to the following URL to access the application:

arduino
Copy code
http://localhost:5173


### You have now successfully set up the Multiple Disease Prediction project!

## Deployment

This project is configured for deployment on Render (backend) and optionally on Netlify (frontend).

### Backend Deployment on Render

1. **Fork or clone this repository** to your GitHub account.

2. **Create a new Web Service on Render:**
   - Connect your GitHub repository
   - Select the repository: `multiple-disease-pridiction`
   - Use the following settings:
     - **Environment**: Python
     - **Build Command**: `pip install -r requirements.txt`
     - **Start Command**: `cd backend && gunicorn app:app`
     - **Plan**: Free

3. **Alternative using render.yaml**: 
   - The project includes a `render.yaml` file for automated deployment
   - Simply connect your repository and Render will use the configuration automatically

### Frontend Deployment on Netlify (Optional)

If you want to deploy the frontend separately:

1. **Navigate to the frontend folder**: The React frontend is available in the `frontend/` directory

2. **Deploy to Netlify:**
   - Connect your GitHub repository to Netlify
   - Set the build directory to `frontend/`
   - Netlify will automatically detect the build settings from `netlify.toml`

3. **Update CORS settings**: Remember to update the Flask CORS configuration in `backend/app.py` to allow requests from your Netlify domain.

### Environment Variables

Make sure to set any required environment variables in your deployment platform if needed.




