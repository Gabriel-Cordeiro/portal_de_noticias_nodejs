var app = require("./config/server");

//A chamada do modulo pode ser feito de duas formas, conforme abaixo:
var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

var rotaHome = require('./app/routes/home')(app);

var rotaNoticias = require('./app/routes/formulario_inclusao_noticia')(app);



app.listen(8080,function()
{
    console.log("Servidor rodando");

});