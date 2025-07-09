# 🩺 Multiple Disease Prediction

A simple prediction system for **heart disease** and **diabetes**, featuring a Flask‑based REST API (backend) and an optional Streamlit UI (frontend). Pre‑trained KNN models (`.joblib`) provide binary predictions (0 = Negative, 1 = Positive).

---

## 📁 Repository Structure

```
multiple-disease-pridiction/
├── backend/
│   ├── app.py
│   ├── knn_heart_model.joblib
│   ├── knn_diabetes_model.joblib
│   └── requirements.txt
└── frontend/ (optional)
    └── streamlit_app.py
```

---

## ⚙️ Features

- **REST API Endpoints (Flask)**
  - `GET /health` — Returns `{ "status": "healthy" }`
  - `POST /predict-heart` — Accepts JSON `{ "input": [...] }`, returns `{ "prediction": 0|1 }`
  - `POST /predict-diabetes` — Accepts JSON `{ "input": [...] }`, returns `{ "prediction": 0|1 }`

- **CORS enabled** for cross‑origin requests.

- **Streamlit UI (optional)** — Interactive web form for both diseases.

---

## 🛠️ Backend: Run Locally

1. **Clone & navigate**  
   ```bash
   git clone https://github.com/sumit-kumar19/multiple-disease-pridiction.git
   cd multiple-disease-pridiction/backend
   ```

2. **Create & activate virtual env**  
   ```bash
   python3 -m venv venv
   source venv/bin/activate      # Linux / macOS
   venv\Scripts\activate       # Windows
   ```

3. **Install dependencies**  
   ```bash
   pip install -r requirements.txt
   ```

4. **Verify model files**  
   Ensure `knn_heart_model.joblib` and `knn_diabetes_model.joblib` are present in `backend/`.

5. **Start the API**  
   ```bash
   python app.py
   ```
   - Dev server binds to `http://0.0.0.0:5000` by default.

6. **Test endpoints**  
   ```bash
   curl http://127.0.0.1:5000/health
   ```
   ```bash
   curl -X POST http://127.0.0.1:5000/predict-heart \
     -H "Content-Type: application/json" \
     -d '{"input":[60,1,3,140,289,0,2,172,0,0.0,1,2,2]}'
   ```

---

## 🖥️ Optional Frontend: Streamlit UI

1. **Install Streamlit** in your backend env (or separate env):  
   ```bash
   pip install streamlit requests
   ```

2. **Create `streamlit_app.py`** in `frontend/` (example in repo).

3. **Run the UI**  
   ```bash
   cd ../frontend
   streamlit run streamlit_app.py
   ```
   - Opens at `http://localhost:8501`

---

## 📦 Dependencies

**Backend** (`backend/requirements.txt`):
```txt
Flask>=2.0.0
Flask-CORS>=3.0.0
numpy>=1.21.0
scikit-learn>=1.0.0
joblib>=1.0.0
gunicorn>=20.0.0
```

**Frontend** (if used):
```txt
streamlit>=1.0
requests>=2.0
```

---

## 🚀 Deployment

### A. Flask API → Render.com

1. Add `render.yaml` to repo root:
   ```yaml
   services:
     - type: web
       name: disease-api
       env: python
       buildCommand: pip install -r backend/requirements.txt
       startCommand: gunicorn app:app
       workingDir: backend
       plan: free
   ```
2. Connect your GitHub repo in Render → “Create Web Service” → Render auto‑deploys.

### B. Streamlit UI → Streamlit Community Cloud

1. Go to [Streamlit Cloud](https://share.streamlit.io/)
2. “New app” → select `frontend/streamlit_app.py` → deploy.

---

## ⚠️ Troubleshooting

- **FileNotFoundError**:  
  Ensure both `.joblib` model files are committed under `backend/`.
- **Port conflicts**:  
  - Flask: uses `PORT` env var if set.  
  - Streamlit: uses port `8501` by default.
- **CORS errors**:  
  Already enabled via `Flask-CORS`.

---

## 🤝 Contributing

1. Fork the repo  
2. Create a feature branch (`git checkout -b feat/your-feature`)  
3. Commit your changes (`git commit -m "feat: add …"`)  
4. Push (`git push origin feat/your-feature`)  
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.  
Feel free to use and modify it as you wish!
