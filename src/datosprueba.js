const freelancers = [
  {
    nombre: "Netti",
    especialidad: "Director of Sales",
    tags: ["Zumba Instruction", "MLSS", "Tires", "Wind"]
  },
  {
    nombre: "Verla",
    especialidad: "Senior Developer",
    tags: [
      "Ultrasonics",
      "Kernel Programming",
      "GxP",
      "Alternative Investments"
    ]
  },
  {
    nombre: "Ingrid",
    especialidad: "Pharmacist",
    link: "http://www.google.com",
    tags: ["Wills", "Ownership", "Komodo Edit"]
  },
  {
    nombre: "Leoline",
    especialidad: "Media Manager IV",
    tags: ["SAP SD Module", "Tax Research", "Skin Care", "Tourism"]
  },
  {
    nombre: "Thorpe",
    especialidad: "Product Engineer",
    tags: ["Kenan FX", "Case Management", "Microsoft SQL Server", "MVT"]
  },
  {
    nombre: "Aliza",
    especialidad: "Quality Control Specialist",
    tags: ["JProfiler", "YSlow", "WGA", "OMAP"]
  },
  {
    nombre: "Balduin",
    especialidad: "Technical Writer",
    tags: [
      "IVD",
      "Japanese to English",
      "Rock Music",
      "TCLEOSE Instruction",
      "Music History"
    ]
  },
  {
    nombre: "Edgard",
    especialidad: "Backend",
    tags: ["VPM", "PnL", "Ghosts", "Eaglesoft"]
  },
  {
    nombre: "Jorgito",
    especialidad: "Backend",
    tags: ["VPM", "PnL", "Ghosts", "Eaglesoft"]
  },
  {
    nombre: "Zebadiah",
    especialidad: "Backend",
    tags: ["Oracle VM", "RLC", "Wound Care", "DSE Assessments", "QML"]
  },
  {
    nombre: "Dedo",
    especialidad: "Backend",
    tags: ["Electric Guitar", "UV disinfection", "General Ledger"]
  }
];

const freelancers_details = [
  {
    nombre: "Netti",
    resumen:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff"
    ]
  },
  {
    nombre: "Verla",
    resumen:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff"
    ]
  },
  {
    nombre: "Ingrid",
    resumen:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/dddddd/000000"
    ]
  },
  {
    nombre: "Leoline",
    resumen:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/dddddd/000000",
      "http://dummyimage.com/250x250.jpg/dddddd/000000"
    ]
  },
  {
    nombre: "Thorpe",
    resumen:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff"
    ]
  },
  {
    nombre: "Aliza",
    resumen:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/dddddd/000000",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/dddddd/000000"
    ]
  },
  {
    nombre: "Balduin",
    resumen:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/dddddd/000000",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/dddddd/000000"
    ]
  },
  {
    nombre: "Edgard",
    resumen:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/dddddd/000000",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/dddddd/000000"
    ]
  },
  {
    nombre: "Jorgito",
    resumen:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
    ]
  },
  {
    nombre: "Zebadiah",
    resumen:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
    ]
  },
  {
    nombre: "Dedo",
    resumen:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    imagen_perfil: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
    portafolio: [
      "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
    ]
  }
];

module.exports = {
  freelancers
};
