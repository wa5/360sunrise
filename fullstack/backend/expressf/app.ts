import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>this is my first api get</h1>");
});
app.post("/", (req, res) => {
  res.send("this is my first api post");
});
app.put("/", (req, res) => {
  res.send("this is my first api put");
});
app.delete("/", (req, res) => {
  res.send("this is my first api delte");
});

app.listen(3000, () => {
  console.log("server is started ");
});
