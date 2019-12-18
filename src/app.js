var express = require("express");
var app = express();
const basededatos = require("./datosprueba");
const isProduction = process.env.NODE_ENV === "production";
const PORT = isProduction ? process.env.PORT : 3000;

//app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Configura express para usar como directorio de plantillas la carpeta "views" */
app.set("views", "./views");
/* Configura express para usar como motor de plantillas "ejs" */
app.set("view engine", "ejs");

/* Configura express para servir archivos 'estaticos' desde la carpeta "static" */
app.use(express.static("static"));

/* Configura ruta principal de la aplicacion web (www.aplicacion.com/) para mostrar la plantilla index */
app.get("/", function(req, res) {
  res.render("index", { freelancers: basededatos.freelancers, detalles:basededatos.freelancers_details });
});

/* Configura ruta de la aplicacion web (www.aplicacion.com/backends) para mostrar la plantilla backends */
app.get("/backends", function(req, res) {
  res.render("backends", { freelancers: basededatos.freelancers });
});

/* Configura ruta de busqueda de la aplicacion web (www.aplicacion.com/busqueda) para generar resultados y servir plantilla con resultados */
app.get("/busqueda", function(req, res) {
  //variable filtros contenera parametros de busqueda
  const filtros = req.query;
  // ejecutar busqueda solo si hay parametro de busqueda
  if (filtros.q !== "") {
    // establece como palabras clave, el conjunto de las palabras (en minusculas) de los parametros de busqueda
    const keywords = filtros.q.split(" ").map(palabra => palabra.toLowerCase());
    /**
     * Filtrar el conjunto de freelancers, tomando los tags y la especialidad de
     * cada uno para que luego de convertirlos a minusculas, considerar como resultado
     * un freelancer en el caso en que su especialidad coincida con el parametro de busqueda o
     * en el caso de que algun tag coincida parcialmente con el parametro de busqueda.
     *
     * Este filtro interactuara sobre cada tag de los freelancers y sobre cada palabra clave
     * usando dos for loops (o sea un bucle), saliendo de forma temprana al encontrar una coincidencia.
     */
    const resultados = basededatos.freelancers.filter(freelancer => {
      let tags = freelancer.tags.map(tag => tag.toLowerCase());
      tags.push(...freelancer.especialidad.split(" ").map(word => word.toLowerCase()));
      /* if (keywords.includes(freelancer.especialidad.toLowerCase())) {
        return true;
      } */

      for (let i = 0; i < tags.length; i++) {
        for (let j = 0; j < keywords.length; j++) {
          if (tags[i].indexOf(keywords[j]) !== -1) {
            return true;
          }
        }
      }
    });
    res.render("resultados", {
      freelancers: resultados,
      detalles: basededatos.freelancers_details,
      filtros: JSON.stringify(filtros)
    });

    //si no hay parametros, redireccionar a pagina principal
  } else {
    res.redirect("/");
  }
});

app.get("/perfiles", function(req, res) {
  res.render("perfiles");
});

app.get("/perfiles/:freelancer", function(req, res) {
  const nombrefreelancer = req.params.freelancer.toLowerCase();
  let detalles = basededatos.freelancers_details.find(
    freelancer => freelancer.nombre.toLowerCase() === nombrefreelancer
  );
  const perfil_freelancer = basededatos.freelancers.find(
    freelancer => freelancer.nombre.toLowerCase() === nombrefreelancer
  );
  detalles = Object.assign({}, detalles, perfil_freelancer);
  //console.log(detalles, nombrefreelancer);

  res.render("perfiles", { detalles });
});

app.get("/backend_busqueda", function(req, res) {
  res.render("backend_busqueda", { freelancers: basededatos.freelancers });
});
app.get("/gracias", function(req, res) {
  res.render("gracias");
});

app.get("/propuesta", function(req, res) {
  res.render("propuesta");
});

app.get("/register", function(req, res) {
  res.render("registro");
});

app.post("/login", function(req, res) {
  const datos = req.body;
  res.send(`Hola ${datos.username}`);
});

app.get("/freelancers", function(req, res) {
  //res.json({"freelancers": basedatos});
});

app.listen(PORT, function() {
  console.log(
    `Aplicacion Lista, visita http://localhost:${PORT}`,
    isProduction ? ", corriendo en modo produccion" : ""
  );
});

if (!isProduction) {
  const liveserver = require("livereload").createServer({ extraExts: ["ejs"] });
  liveserver.watch(["views", "static"]);
}
