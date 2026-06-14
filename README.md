🛰️ SATELLITO
AI-Based Satellite Signal Performance and Failure Prediction System Using Weather and Historical Data
🌐 Live Deployment
🚀 Frontend: https://satellito.vercel.app
⚙️ Backend API: https://satellito.onrender.com
📌 Overview

SATELLITO is a full-stack machine learning web application that predicts satellite signal strength and communication failure risk based on environmental conditions.

It analyzes key weather parameters such as:

Temperature
Humidity
Rainfall
Wind Speed

and estimates how they impact satellite communication performance.

The system combines Machine Learning, Flask, React.js, and Data Visualization to provide an interactive predictive dashboard.

🚀 Key Features
🤖 Machine Learning Prediction
Predicts satellite signal strength (%)
Estimates communication failure risk
⚠️ Risk Classification
🟢 Low Risk
🟡 Medium Risk
🔴 High Risk
🌐 Interactive Dashboard
Modern React.js UI
Real-time prediction results
User-friendly input system
📊 Data Visualization
Signal strength trends
Historical prediction tracking
Analytics dashboard cards
🔗 Full Stack Integration
React Frontend (Vercel)
Flask Backend (Render)
ML Model (Scikit-learn)
🏗️ System Architecture
User Input (Weather Data)
        ↓
React Dashboard (Frontend)
        ↓
Axios API Request
        ↓
Flask Backend API
        ↓
Machine Learning Model
        ↓
Prediction Response
        ↓
UI Visualization
🧠 Machine Learning Model
Algorithm
Random Forest Regressor
Input Features
Temperature (°C)
Humidity (%)
Rainfall (mm)
Wind Speed (km/h)
Output
Signal Strength (%)
Risk Category (Low / Medium / High)
Why Random Forest?
Handles nonlinear relationships effectively
Reduces overfitting
Stable and accurate predictions
Best suited for tabular environmental data
🛠️ Tech Stack
🎨 Frontend
React.js (Vite)
Axios
Recharts
HTML, CSS, JavaScript
⚙️ Backend
Flask
Flask-CORS
Gunicorn (deployment)
🤖 Machine Learning
Scikit-learn
Pandas
NumPy
Joblib
🧰 Tools
VS Code
Git & GitHub
Vercel
Render
📂 Project Structure
SATELLITO/
│
├── backend/
│   ├── app.py
│   ├── train_model.py
│   ├── dataset.csv
│   ├── model.pkl
│   └── requirements.txt
│
├── satellito/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── LICENSE
└── README.md
⚙️ Installation & Setup
🔹 Clone Repository
git clone https://github.com/YOUR_USERNAME/SATELLITO.git
cd SATELLITO
🔹 Backend Setup
cd backend
pip install -r requirements.txt
python train_model.py
python app.py

Backend runs at:

http://127.0.0.1:5000
🔹 Frontend Setup
cd satellito
npm install
npm run dev

Frontend runs at:

http://localhost:5173
📊 Sample Prediction

Input:

Temperature: 30°C
Humidity: 50%
Rainfall: 10 mm
Wind Speed: 15 km/h

Output:

Signal Strength: 84%
Risk Level: LOW
📈 Future Enhancements
Live weather API integration
Real satellite telemetry data
Advanced deep learning models
Real-time monitoring dashboard
Alert system for signal failure
Mobile application version
📸 Screenshots

(Add here)

Dashboard UI
Prediction panel
Graph analytics
Backend API running
👨‍💻 Author

Shivam Pratap Singh
B.Sc. Data Science & Artificial Intelligence
Indian Institute of Technology Guwahati

📜 License

This project is licensed under the MIT License.

⭐ Project Status

✔ Fully Deployed
✔ Fully Functional
✔ End-to-End AI System
