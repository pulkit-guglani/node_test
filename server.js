// var http = require('http');
var url = require('url');
const response = `<table><tr><td>Agent Smith</td><td>void20@null.org</td><td>91007C53BE1DF54</td></tr>
<tr><td>Agent Smith</td><td>void21@null.org</td><td>D8BEGAEF969D374</td></tr>
<tr><td>Agent Smith</td><td>void22@null.org</td><td>EAEB057A1B34592</td></tr>
<tr><td>Agent Smith</td><td>void23@null.org</td><td>15BD2BCBB557E3F</td></tr> </table>`
const cors = require('cors');



// Use the cors middleware



// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   console.log(q.count);
 
//   const count = q.count;
//   let output="";
//   for(var i = 0; i<count;i++)
//   {
//     output+=response;
//   }
//   res.write(output);
//   res.end();
// }).listen(8080);

const express = require('express');
const app = express();
app.use(cors());

// Define a route for handling GET requests to the root path
app.get('/', (req, res) => {
  var q = url.parse(req.url, true).query;
  console.log(q.count);
 
  const count = q.count;
  if(!count){
    count =1;
  }
  let output="";
  for(var i = 0; i<count;i++)
  {
    output+=response;
  }
  res.send(output);
});

// Listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});