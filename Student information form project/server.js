import express from "express";
import { dirname } from "path";   
import { fileURLToPath } from "url";  

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000; 

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
   res.sendFile(__dirname +"/public/index.html");
});

app.post("/submit", ()=>{
    res.send("<centre><h1><br>Thank you for filling the form.</br> We will get back to you!</h1></centre>");
    console.log(req.body);
});

app.listen(port, ()=>{
   console.log(`Server is running on the port ${port}`);
});