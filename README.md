# Multiple Disease Prediction System

A machine learning application that predicts heart disease and diabetes using trained KNN models. The system consists of a Flask backend API and a React frontend interface.

## Features

- **Heart Disease Prediction**: Predicts the likelihood of heart disease based on medical parameters
- **Diabetes Prediction**: Predicts the likelihood of diabetes based on health metrics
- **Responsive Design**: Fully responsive and compatible with all devices including desktops, tablets and smartphones
- **Real-time Predictions**: Fast API responses using pre-trained machine learning models

## Project Structure

```
multiple-disease-prediction/
├── backend/
│   ├── app.py              # Flask API server
│   ├── *.joblib            # Trained ML models
│   └── *.csv               # Training datasets
├── frontend/
│   ├── src/                # React source code
│   ├── package.json        # Node.js dependencies
│   ├── vite.config.js      # Vite configuration
│   └── netlify.toml        # Netlify deployment config
├── requirements.txt        # Python dependencies
├── render.yaml            # Render deployment config
├── Procfile              # Heroku/Render process file
└── README.md             # This file
```

## Local Development Setup

### Prerequisites
- Python 3.8+ 
- Node.js 16+
- npm or yarn

### Backend Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sumit-kumar19/multiple-disease-pridiction.git
   cd multiple-disease-pridiction
   ```

2. **Create Virtual Environment (Recommended)**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Python Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run Backend Server**
   ```bash
   cd backend
   python app.py
   ```
   The API will be available at `http://localhost:5000`

### Frontend Setup

1. **Navigate to Frontend Directory**
   ```bash
   cd frontend
   ```

2. **Install Node Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

## API Endpoints

- `GET /health` - Health check endpoint
- `POST /predict-heart` - Heart disease prediction
- `POST /predict-diabetes` - Diabetes prediction

### Example API Usage

```bash
# Health check
curl -X GET http://localhost:5000/health

# Heart disease prediction
curl -X POST http://localhost:5000/predict-heart \
  -H "Content-Type: application/json" \
  -d '{"input": [63, 1, 3, 145, 233, 1, 0, 150, 0, 2.3, 0, 0, 1]}'

# Diabetes prediction  
curl -X POST http://localhost:5000/predict-diabetes \
  -H "Content-Type: application/json" \
  -d '{"input": [6, 148, 72, 35, 0, 33.6, 0.627, 50]}'
```

## Deployment

### Backend Deployment on Render

1. **Automatic Deployment (Recommended)**
   - Fork this repository to your GitHub account
   - Connect your GitHub account to [Render](https://render.com)
   - Create a new "Web Service" from your forked repository
   - Render will automatically use the `render.yaml` configuration

2. **Manual Configuration**
   - Create a new "Web Service" on Render
   - Connect your GitHub repository
   - Use these settings:
     - **Environment**: Python
     - **Build Command**: `pip install -r requirements.txt`
     - **Start Command**: `cd backend && gunicorn --bind 0.0.0.0:$PORT app:app`
     - **Plan**: Free

3. **Alternative Platforms**
   - **Heroku**: The included `Procfile` supports Heroku deployment
   - **Railway**: Compatible with the current configuration
   - **Python Anywhere**: Can be deployed with minor adjustments

### Frontend Deployment on Netlify

1. **Automatic Deployment**
   - Fork this repository to your GitHub account
   - Connect your GitHub account to [Netlify](https://netlify.com)
   - Create a new site from your forked repository
   - Netlify will automatically detect the build settings from `netlify.toml`
   - The `netlify.toml` file includes optimized configuration with Node.js version specification and security headers

2. **Environment Variables Configuration**
   - In your Netlify site settings, add the following environment variable:
     - **VITE_API_URL**: Your deployed backend URL (e.g., `https://your-backend.render.com`)
   - The frontend will automatically use localhost:5000 for local development

3. **Manual Configuration (if needed)**
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Base Directory**: `frontend`

4. **Update CORS Settings**
   - Update CORS settings in `backend/app.py` to allow requests from your Netlify domain

### Alternative Frontend Deployment

- **Vercel**: Compatible with the current Vite setup
- **GitHub Pages**: Requires additional configuration for SPA routing
- **Firebase Hosting**: Works with the build output

## Environment Variables

### Backend
For production deployment, consider setting:

- `FLASK_ENV=production` (for Flask)
- `PORT` (automatically set by most platforms)
- Custom model paths if models are stored separately

### Frontend
The frontend uses environment variables for API configuration:

- `VITE_API_URL`: The backend API URL
  - **Local Development**: `http://localhost:5000` (default)
  - **Production**: Set to your deployed backend URL (e.g., `https://your-backend.render.com`)

Create a `.env` file in the `frontend/` directory for local development:
```bash
VITE_API_URL=http://localhost:5000
```

For Netlify deployment, set the `VITE_API_URL` environment variable in your Netlify site settings.

## Troubleshooting

### Common Issues

1. **Model Loading Errors**
   - Ensure scikit-learn is installed: `pip install scikit-learn`
   - Check model file paths in `app.py`

2. **CORS Errors**
   - Update CORS configuration in `app.py` for your domain
   - For production, replace `support_credentials=True` with specific origins

3. **Build Failures**
   - Ensure all dependencies are listed in `requirements.txt`
   - Check Python version compatibility (3.8+ recommended)

4. **Frontend Build Issues**
   - Run `npm install` to ensure all dependencies are installed
   - Clear cache: `npm run build --force`

### Performance Notes

- Models are loaded once at startup for better performance
- API includes error handling and health checks
- Frontend is optimized for production builds

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This project is open source and available under the MIT License.