const https = require("https"),
    fs = require("fs");

const opciones = {
  hostname: "es.wikipedia.org",
  port: 443,
  path: "/wiki/Node.js",
  method: "GET"
};

const req = https.request(opciones,  res => {

  let respuesta = "";

  console.log("Estatus servidor: ",res.statusCode);

  res.setEncoding("UTF-8");

  res.once("data", data => {
    console.log(data);
  });

  res.on("data", data =>{
    console.log(data.length);
    respuesta += data;
  });

  res.on("end", () => {
    fs.writeFile("nodejs.html",respuesta, (err)=>{
      if(err) throw err;
      console.log("Proceso terminado");
    });
  });

});

req.on("error", err => {
  console.log("Error en la solicitud ",err);

});

req.end();