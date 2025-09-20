const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const apiRoutes = require("./routes/api");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
