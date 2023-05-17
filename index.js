const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const posts = require('./model/posts');
const routes = require('./routes/routes')
app.use(express.json())
app.use("/",express.static(path.join(__dirname,'public')))
app.use('/routes',routes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
