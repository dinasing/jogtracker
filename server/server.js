const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'dist');

app.use(express.static(publicPath));

app.get('*', (request, response) => {
  response.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port ' + port);
});
