var http = require('http');
var url = require('url');
const response = `<table><tr><td>Agent Smith</td><td>void20@null.org</td><td>91007C53BE1DF54</td></tr>
<tr><td>Agent Smith</td><td>void21@null.org</td><td>D8BEGAEF969D374</td></tr>
<tr><td>Agent Smith</td><td>void22@null.org</td><td>EAEB057A1B34592</td></tr>
<tr><td>Agent Smith</td><td>void23@null.org</td><td>15BD2BCBB557E3F</td></tr> </table>`

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  console.log(q.count);
 
  const count = q.count;
  let output="";
  for(var i = 0; i<count;i++)
  {
    output+=response;
  }
  res.write(output);
  res.end();
}).listen(8080);