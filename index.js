import express from "express";

const app = express();

let number = 0;

app.get("/", (req, res) => {
  res.send(`number is ${number}`);
});

app.post("/inc", (req, res) => {
  number = number + 1;
  res.send(`number is ${number}`);
});

app.post("/dec", (req, res) => {
  number = number - 1;
  res.send(`number is ${number}`);
});

app.post("/die", (req, res) => {
  console.log("Closed");
  server.close(() => {
    process.exit(0);
  });
});

app.listen(3000, () => {
  console.log("Port is running");
});
