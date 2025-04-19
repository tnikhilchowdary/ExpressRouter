const express = require('express');
const app = express();
const port = 3000;

const feedbackRoutes = require('./Routes');


app.use(express.json());


app.use('/routes', feedbackRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
