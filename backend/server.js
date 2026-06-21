const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");

const hallRoutes = require("./routes/hallRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/halls", hallRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(5000, () => {
    console.log("Server Running");
});