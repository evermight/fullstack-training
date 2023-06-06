

let express = require('express');
let app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/pizza.html', (req, res) => {
  res.send('I love pizza from express');
});


app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});