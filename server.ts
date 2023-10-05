// This is a main server connection file. 
// Please Write code to create server.
import express from "express";

const app = express();

const port = 8000;

app.listen(()=>{
  console.log("Server is listening on Port" + port);
})
