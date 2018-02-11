var http = require('http');

var server =http.createServer(function(req,res)
{
    var categoria = req.url;
 
    if(categoria == 'tecnologia')
    {
        res.end('<html><body>Notícias de tecnologia</body></html>');
    }
    
       res.end('<html><body>Notícias de tecnologia</body></html>');
});

server.listen(8080);