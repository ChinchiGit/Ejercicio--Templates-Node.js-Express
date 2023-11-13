const express = require('express')
const app = express()
const port = 3000

const pugRoutes = require("./routes/routes")

//conficguracion PUG
app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public'));

app.use('/', pugRoutes);



app.get("*",(req,res)=>{
  res.status(404).send("Gatito triste - 404 not found");
})


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})