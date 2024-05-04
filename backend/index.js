require("dotenv").config();
const express = require("express");
const app = new express();
const PORT = process.env.PORT || 3000;
const main = require("./config/database");
const userRouter = require("./routes/userRoutes");
const tweetRouter = require("./routes/tweetRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");

main();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//api
app.use("/api/v1/user", userRouter);
app.use("/api/v1/tweet", tweetRouter);

app.listen(PORT, () => {
  console.log(`Listing on PORT : ${PORT}`);
});
