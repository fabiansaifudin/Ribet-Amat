const express = require('express');
const app = express()
const port = process.env.PORT || 3010;
app.get('/', function (req, res) {
    return res.send('test')
});
app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`API base URL: http://localhost:${port}/api`);
})