import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
import joblib

np.random.seed(42)

rows = 1000

temperature = np.random.randint(10, 45, rows)
humidity = np.random.randint(20, 100, rows)
rainfall = np.random.randint(0, 100, rows)
wind_speed = np.random.randint(0, 80, rows)

signal_strength = (
    100
    - rainfall * 0.4
    - humidity * 0.15
    - wind_speed * 0.25
    + temperature * 0.1
)

signal_strength = np.clip(signal_strength, 0, 100)

df = pd.DataFrame({
    "Temperature": temperature,
    "Humidity": humidity,
    "Rainfall": rainfall,
    "WindSpeed": wind_speed,
    "SignalStrength": signal_strength
})

df.to_csv("dataset.csv", index=False)

X = df[["Temperature", "Humidity", "Rainfall", "WindSpeed"]]
y = df["SignalStrength"]

model = RandomForestRegressor(
    n_estimators=100,
    random_state=42
)

model.fit(X, y)

joblib.dump(model, "model.pkl")

print("Model trained successfully!")