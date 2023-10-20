import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;



app.get("/", (_, res) => {
  res.json({ name: "Joy" });
});




app.listen(3000, () => {
  console.log(`App is running on http://127.0.0.1:${PORT}`);
});
