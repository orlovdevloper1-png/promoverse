const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Static files (HTML CSS JS)
app.use(express.static(path.join(__dirname, "public")));

// Home Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Advertise page example
app.get("/advertise", (req, res) => {
  res.send("<h1>Advertise your Discord Server here 🚀</h1>");
});

// Search page example
app.get("/search", (req, res) => {
  res.send("<h1>Search Discord Servers 🔎</h1>");
});

// API example
app.get("/api/servers", (req, res) => {
  res.json({
    status: "ok",
    message: "PromoVerse API Running"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`PromoVerse running on port ${PORT}`);
});
