import axios from "axios";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function App() {
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [windSpeed, setWindSpeed] = useState("");

  const [signal, setSignal] = useState("--");
  const [risk, setRisk] = useState("--");

  const [history, setHistory] = useState([]);

  const predict = async () => {
    try {
      const response = await axios.post(
        "https://https://satellito.onrender.com/predict",
        {
          temperature,
          humidity,
          rainfall,
          windSpeed,
        }
      );

      const signalValue = response.data.signalStrength;
      const riskValue = response.data.risk;

      setSignal(signalValue);
      setRisk(riskValue);

      const newPrediction = {
        temperature,
        humidity,
        rainfall,
        windSpeed,
        signal: signalValue,
        risk: riskValue,
      };

      setHistory((prev) => [newPrediction, ...prev]);
    } catch (error) {
      console.error(error);
      alert("Backend Connection Failed");
    }
  };

  const chartData = [
    { day: "Mon", signal: 78 },
    { day: "Tue", signal: 82 },
    { day: "Wed", signal: 75 },
    { day: "Thu", signal: 88 },
    { day: "Fri", signal: 84 },
    { day: "Sat", signal: 91 },
    { day: "Sun", signal: signal === "--" ? 87 : Number(signal) },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "30px",
        fontFamily: "Segoe UI",
      }}
    >
      <h1 style={{ color: "#2563eb" }}>🛰 SATELLITO</h1>

      <p
        style={{
          color: "#555",
          marginBottom: "30px",
        }}
      >
        AI-Based Satellite Signal Performance & Failure Prediction System
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <Card
          title="Signal Strength"
          value={signal === "--" ? "78%" : `${signal}%`}
          color="#3b82f6"
        />

        <Card
          title="Failure Risk"
          value={risk === "--" ? "LOW" : risk}
          color="#f59e0b"
        />

        <Card
          title="Weather Impact"
          value="0.65"
          color="#10b981"
        />

        <Card
          title="Model Accuracy"
          value="92.4%"
          color="#8b5cf6"
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div style={panel}>
          <h2>Satellite Prediction Input</h2>

          <input
            placeholder="Temperature (°C)"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Humidity (%)"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Rainfall (mm)"
            value={rainfall}
            onChange={(e) => setRainfall(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Wind Speed (km/h)"
            value={windSpeed}
            onChange={(e) => setWindSpeed(e.target.value)}
            style={inputStyle}
          />

          <button style={buttonStyle} onClick={predict}>
            Predict
          </button>
        </div>

        <div style={panel}>
          <h2>Prediction Result</h2>

          <h3>Signal Strength</h3>

          <h1 style={{ color: "#2563eb" }}>
            {signal === "--" ? "--" : `${signal}%`}
          </h1>

          <h3>Failure Risk</h3>

          <h1
            style={{
              color:
                risk === "LOW"
                  ? "#10b981"
                  : risk === "MEDIUM"
                  ? "#f59e0b"
                  : "#ef4444",
            }}
          >
            {risk}
          </h1>
        </div>
      </div>

      <div style={panel}>
        <h2>Signal Strength Trend</h2>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="signal"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          ...panel,
          marginTop: "30px",
        }}
      >
        <h2>Prediction History</h2>

        <table
          style={{
            width: "100%",
            marginTop: "20px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#2563eb",
                color: "white",
              }}
            >
              <th style={th}>Temp</th>
              <th style={th}>Humidity</th>
              <th style={th}>Rainfall</th>
              <th style={th}>Wind</th>
              <th style={th}>Signal</th>
              <th style={th}>Risk</th>
            </tr>
          </thead>

          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <td style={td}>{item.temperature}</td>
                <td style={td}>{item.humidity}</td>
                <td style={td}>{item.rainfall}</td>
                <td style={td}>{item.windSpeed}</td>
                <td style={td}>{item.signal}%</td>
                <td style={td}>{item.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div
      style={{
        background: color,
        color: "white",
        padding: "25px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
      }}
    >
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}

const panel = {
  background: "white",
  padding: "25px",
  borderRadius: "15px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "10px",
  borderRadius: "8px",
  border: "1px solid #ddd",
};

const buttonStyle = {
  marginTop: "15px",
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 30px",
  borderRadius: "10px",
  cursor: "pointer",
};

const th = {
  padding: "12px",
  textAlign: "left",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
};

export default App;
