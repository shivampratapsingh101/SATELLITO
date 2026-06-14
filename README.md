# SATELLITO
AI-Based Satellite Signal Performance and Failure Prediction System Using Weather and Historical Data
# 🛰️ SATELLITO

## AI-Based Satellite Signal Performance and Failure Prediction System Using Weather and Historical Data

SATELLITO is a machine learning-powered web application developed to predict satellite signal performance and communication failure risk based on environmental conditions. The system utilizes weather parameters such as temperature, humidity, rainfall, and wind speed to estimate signal strength and classify operational risk levels.

The project combines Machine Learning, Flask, React.js, and Data Visualization techniques to provide an interactive dashboard for predictive satellite communication monitoring.

---

## 📌 Project Overview

Satellite communication systems are highly influenced by atmospheric and environmental conditions. Factors such as rainfall, humidity, and strong winds can significantly degrade signal quality and affect communication reliability.

SATELLITO addresses this challenge by providing:

* Real-time signal strength prediction
* Failure risk estimation
* Interactive web dashboard
* Historical prediction tracking
* Visual analytics and trend monitoring

The system enables users to proactively assess communication reliability under varying environmental conditions.

---

## 🚀 Features

### Machine Learning Prediction

* Predicts satellite signal strength using weather parameters.
* Uses Random Forest Regression for prediction.

### Risk Classification

* LOW Risk
* MEDIUM Risk
* HIGH Risk

### Interactive Dashboard

* Modern React.js interface.
* User-friendly input forms.
* Real-time prediction display.

### Data Visualization

* Signal strength trend graph.
* Historical prediction records.
* Dashboard analytics cards.

### Full Stack Integration

* React Frontend
* Flask Backend
* Scikit-Learn Machine Learning Model

---

## 🏗️ System Architecture

Weather Parameters
↓
React Dashboard
↓
Axios API Requests
↓
Flask Backend
↓
Random Forest Model
↓
Signal Prediction
↓
Risk Classification
↓
Dashboard Visualization

---

## 🧠 Machine Learning Model

### Algorithm Used

Random Forest Regressor

### Input Features

* Temperature (°C)
* Humidity (%)
* Rainfall (mm)
* Wind Speed (km/h)

### Output

* Predicted Signal Strength (%)
* Failure Risk Category

### Why Random Forest?

Random Forest was selected because:

* Handles nonlinear relationships effectively
* Provides stable predictions
* Resistant to overfitting
* Suitable for tabular environmental datasets

---

## 🛠️ Technology Stack

### Frontend

* React.js
* Axios
* Recharts
* HTML5
* CSS3

### Backend

* Flask
* Flask-CORS

### Machine Learning

* Scikit-Learn
* Pandas
* NumPy
* Joblib

### Development Tools

* Visual Studio Code
* Git
* GitHub

---

## 📂 Project Structure

SATELLITO/

├── backend/

│ ├── app.py

│ ├── train_model.py

│ ├── dataset.csv

│ ├── model.pkl

│ └── requirements.txt

│

├── satellito/

│ ├── src/

│ ├── public/

│ ├── package.json

│ └── vite.config.js

│

├── LICENSE

└── README.md

---

## ⚙️ Installation and Setup

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/SATELLITO.git
cd SATELLITO
```

### Backend Setup

```bash
cd backend

pip install -r requirements.txt

python train_model.py

python app.py
```

Backend will run at:

```text
http://127.0.0.1:5000
```

### Frontend Setup

```bash
cd satellito

npm install

npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

---

## 📊 Sample Input

Temperature = 30°C

Humidity = 50%

Rainfall = 10 mm

Wind Speed = 15 km/h

### Example Output

Predicted Signal Strength = 84%

Failure Risk = LOW

---

## 📈 Future Enhancements

* Integration with live weather APIs
* Real satellite telemetry datasets
* Cloud deployment
* Advanced machine learning models
* Real-time monitoring dashboard
* Satellite path prediction module
* Alert and notification system

---

## 📸 Project Demonstration

Add screenshots here:

* Dashboard Interface
* User Input Screen
* Prediction Results
* Signal Trend Graph
* Prediction History Table
* Backend Running
* Frontend Running

---

## 📚 References

[1] Leo Breiman, "Random Forests", Machine Learning, 2001.

[2] Christopher M. Bishop, Pattern Recognition and Machine Learning, Springer, 2006.

[3] Trevor Hastie, Robert Tibshirani, Jerome Friedman, The Elements of Statistical Learning, Springer, 2009.

[4] Scikit-Learn Documentation

https://scikit-learn.org

[5] Flask Documentation

https://flask.palletsprojects.com

[6] React Documentation

https://react.dev

[7] Timothy Pratt and Charles Bostian, Satellite Communications, John Wiley & Sons.

---

## 👨‍💻 Author

Shivam Pratap Singh

B.Sc. Data Science and Artificial Intelligence

Indian Institute of Technology Guwahati

---

## 📄 License

This project is licensed under the MIT License.

© 2026 Shivam Pratap Singh. All rights reserved.
