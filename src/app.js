var express = require("express");
var app = express();
const basededatos = require("./datosprueba");

//app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("static"));

app.get("/", function(req, res) {
  res.render("index", { freelancers: basededatos.freelancers });
});
app.get("/backends", function(req, res) {
  res.render("backends", { freelancers: basededatos.freelancers });
});

app.get("/busqueda", function(req, res) {
  //manejar busqueda freelancers,
  const filtros = req.query;
  if (filtros.q !== "") {
    const keywords = filtros.q.split(" ").map(palabra => palabra.toLowerCase());
    const resultados = basededatos.freelancers.filter(freelancer => {
      let tags = freelancer.tags.map(tag => tag.toLowerCase());
      if (keywords.includes(freelancer.especialidad.toLowerCase())){
        return true
      }
      for (let i = 0; i < tags.length; i++) {
        for (let j = 0; j < keywords.length; j++) {
          if(tags[i].indexOf(keywords[j])!==-1){
            return true
          }
        }
      }
    });
    res.render("resultados", {
      freelancers: resultados,
      filtros: JSON.stringify(filtros)
    });
  } else {
    res.redirect("/");
  }
});

app.get("/perfiles", function(req, res) {
  res.render("perfiles");
});
app.get("/backend_busqueda", function(req, res) {
  res.render("backend_busqueda", { freelancers: basededatos.freelancers });
});
app.get("/gracias", function(req, res) {
  res.render("gracias");
});

app.post("/login", function(req, res) {
  const datos = req.body;
  res.send(`Hola ${datos.username}`);
});

app.get("/freelancers", function(req, res) {
  //res.json({"freelancers": basedatos});
});

app.listen(3000, function() {
  console.log("Aplicacion Lista, visita http://localhost:3000 !");
});

const liveserver = require("livereload").createServer({ extraExts: ["ejs"] });
liveserver.watch(["views", "static"]);
