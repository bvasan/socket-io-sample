const path = require('path');
const express = require('express');

var app = express();

const publicPath = path.join(__dirname,'../public');
console.log(publicPath);

app.use(express.static(publicPath));

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
