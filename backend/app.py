from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

# Load trained model
model = joblib.load("model.pkl")


@app.route("/")
def home():
    return "SATELLITO Backend Running!"


@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    temperature = float(data["temperature"])
    humidity = float(data["humidity"])
    rainfall = float(data["rainfall"])
    wind_speed = float(data["windSpeed"])

    prediction = model.predict([[
        temperature,
        humidity,
        rainfall,
        wind_speed
    ]])[0]

    signal = round(float(prediction), 2)

    if signal > 70:
        risk = "LOW"
    elif signal > 40:
        risk = "MEDIUM"
    else:
        risk = "HIGH"

    return jsonify({
        "signalStrength": signal,
        "risk": risk
    })


if __name__ == "__main__":
    app.run(debug=True, port=5000)