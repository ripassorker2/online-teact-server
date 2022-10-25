const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courese.json");

app.get("/", (req, res) => {
  res.send("online tech servar in running !!");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get('/courses/:id',(req,res)=>{
    const id =req.params.id
    console.log(id);
    const singleCourse=courses.find(course=>course.id==id)
    res.send(singleCourse)
    
})

app.listen(port, () => {
  console.log(`Travel guru running on port, ${port}`);
});
