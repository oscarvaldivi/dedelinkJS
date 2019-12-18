const freelancers = [
  {
    nombre: "Saul Roldán",
    especialidad: "Diseñador Gráfico",
    tags: ["CSS", "Photoshop", "UX", "Javascript", "HTMl"]
  },
  {
    nombre: "Lorena Hernández",
    especialidad: "FrontEnd Developer",
    tags: ["Javascript", "HTML", "CSS", "JQuery", "AngularJs"]
  },
  {
    nombre: "Mar Coloma",
    especialidad: "FrontEnd Developer",
    link: "http://www.google.com",
    tags: ["CSS", "Javascript", "Bootstrap", "Wordpress", "HTMl"]
  },
  {
    nombre: "Tamar Buela",
    especialidad: "FrontEnd Developer",
    tags: ["HTML", "AngularJs", "JQuery", "Css", "Bootstrap"]
  },
  {
    nombre: "Thamara Gerig",
    especialidad: "FrontEnd Developer",
    tags: ["Javascript", "JQuery", "React", "HTML", "CSS"]
  },
  {
    nombre: "Carlos Juan",
    especialidad: "FrontEnd Developer",
    tags: ["JQuery", "HTML", "CSS", "Bootstrap", "Javascript"]
  },
  {
    nombre: "Oscar Valdivia",
    especialidad: "FrontEnd Developer",
    tags: ["NodeJs", "HTML", "CSS", "Bootstrap", "Javascript"]
  },
  {
    nombre: "Alejandro Nevado",
    especialidad: "Diseñador Gráfico",
    tags: ["NodeJs", "HTML", "CSS", "Bootstrap", "Javascript"]
  },
  {
    nombre: "Jorge Alayo",
    especialidad: "Backend",
    tags: ["Python", "NodeJs", "Javascript", "React", "PhP"]
  },
  {
    nombre: "Georgi Anatoliev",
    especialidad: "Backend",
    tags: ["MySQL", "Php", "Ruby", "Java", "Javascript"]
  },
  {
    nombre: "Diego Collados",
    especialidad: "Senior FrontEnd Developer",
    tags: ["Angular", "Javascript", "NodeJs", "Php", "MySQL"]
  },
  {
    nombre: "Cristhian Armijos",
    especialidad: "FrontEnd Developer",
    tags: ["HTML", "CSS", "Bootstrap", "Java", "Javascript"]
  },
  {
    nombre: "Dekel Abelson",
    especialidad: "Backend",
    tags: ["MySQL", "Php", "C++", "Java", "Python"]
  },
  {
    nombre: "Henry Rios",
    especialidad: "Backend",
    tags: ["MySQL", "Php", "Rubi", "Java", "Javascript"]
  },
  {
    nombre: "Gonzalo Férnandez",
    especialidad: "Backend",
    tags: ["MySQL", "Php", "Rubi", "Java", "Javascript"]
  },
  {
    nombre: "Said Mohamed",
    especialidad: "Backend",
    tags: ["Android", "Php", "C++", "Java", "Python"]
  },
  {
    nombre: "Ronald Martinez",
    especialidad: "Backend",
    tags: ["MongoDB", "Php", "Rubi", "Java", "Python"]
  },
  {
    nombre: "Oliver Hérnandez",
    especialidad: "Backend",
    tags: ["MySQL", "Php", "Angular", "Java", "Javascript"]
  },
  {
    nombre: "Sebastian Dioses",
    especialidad: "Backend",
    tags: ["MySQL", "Php", ".Net", "Java", "C++"]
  },
  {
    nombre: "Javier Nakazone",
    especialidad: "Backend",
    tags: ["MongoDB", "Php", "C++", "Java", "Javascript"]
  }
];

const freelancers_details = [
  {
    nombre: "Saul Roldán",
    resumen:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncusDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncusDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncusDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      "http://dummyimage.com/250x250.jpg/dddddd/000000"
    ]
  },
  {
    nombre: "Lorena Hernández",
    resumen:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      "http://dummyimage.com/250x250.jpg/dddddd/000000"
    ]
  },
  {
    nombre: "Mar Coloma",
    resumen:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/dddddd/000000",
      "http://dummyimage.com/250x250.jpg/dddddd/000000",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
    ]
  },
  {
    nombre: "Tamar Buela",
    resumen:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff"
    ]
  },
  {
    nombre: "Thamara Gerig",
    resumen:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/dddddd/000000",
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/dddddd/000000"
    ]
  },
  {
    nombre: "Carlos Juan",
    resumen:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncusDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncusDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/dddddd/000000",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff"
    ]
  },
  {
    nombre: "Oscar Valdivia",
    resumen:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncusDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncusDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/dddddd/000000",
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff"
    ]
  },
  {
    nombre: "Alejandro Nevado",
    resumen: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
    ]
  },
  {
    nombre: "Jorge Alayo",
    resumen:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncusDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff"
    ]
  },
  {
    nombre: "Georgi Anatoliev",
    resumen:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/dddddd/000000",
      "http://dummyimage.com/250x250.jpg/dddddd/000000"
    ]
  },
  {
    nombre: "Diego Collados",
    resumen:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/dddddd/000000",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/dddddd/000000",
      "http://dummyimage.com/250x250.jpg/dddddd/000000"
    ]
  },
  {
    nombre: "Cristhian Armijos",
    resumen:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncusDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncusDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/dddddd/000000",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff"
    ]
  },
  {
    nombre: "Dekel Abelson",
    resumen:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/dddddd/000000",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      "http://dummyimage.com/250x250.jpg/dddddd/000000",
      "http://dummyimage.com/250x250.jpg/dddddd/000000"
    ]
  },
  {
    nombre: "Henry Rios",
    resumen:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncusDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncusDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
    ]
  },
  {
    nombre: "Gonzalo Férnandez",
    resumen:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus
      ",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/dddddd/000000",
      "http://dummyimage.com/250x250.jpg/dddddd/000000"
    ]
  },
  {
    nombre: "Said Mohamed",
    resumen:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff"
    ]
  },
  {
    nombre: "Ronald Martinez",
    resumen:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/dddddd/000000",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/dddddd/000000",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff"
    ]
  },
  {
    nombre: "Oliver Hérnandez",
    resumen: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/dddddd/000000",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff"
    ]
  },
  {
    nombre: "Sebastian Dioses",
    resumen:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
    ]
  },
  {
    nombre: "Javier Nakazone",
    resumen:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
    ]
  }
];

module.exports = {
  freelancers,
  freelancers_details
};
