require("dotenv").config("./config/.env");
const express = require("express");
userRoutes = require("./routes/user");
mongoose = require("mongoose");
const app = express();

mongoose.set("strictQuery", false);
try {
  mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("connected to db");
} catch (error) {
  handleError(error);
}
process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error.message);
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
PORT = process.env.PORT;
//using user route
app.use(userRoutes);

app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));
