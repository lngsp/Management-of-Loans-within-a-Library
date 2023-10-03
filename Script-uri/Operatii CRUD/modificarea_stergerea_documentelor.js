//OPERATII CRUD 

///////////////////////////////MODIFICAREA DOCUMENTELOR

//update adresa domiciliului unui cititor
db.cititori.updateOne(
	{adresa_email: "irinadragomir@gmail.com"},
	{$set: { adresa: "Strada Libertatii, Nr. 25, Iasi"}}
);

//modificare numar exemplare carti
db.carti.updateOne(
   { titlu: "Regina Charlotte" },
   { $set: { numar_exemplare: 1 } }
);

db.carti.updateMany({}, { $set: { numar_pagini: null } });

db.carti.updateOne(
   { titlu: "Regina Charlotte" },
   { $set: { numar_pagini: 512 } }
);

db.carti.updateOne(
   { titlu: "Am scris o carte despre noi" },
   { $set: { numar_pagini: 250 } }
);

db.carti.updateOne(
   { titlu: "Aleea cu licurici" },
   { $set: { numar_pagini: 320 } }
);

db.carti.updateOne(
   { titlu: "Poveste dintr-un suflet" },
   { $set: { numar_pagini: 150 } }
);

db.carti.updateOne(
   { titlu: "Harry Potter și Piatra Filozofală" },
   { $set: { numar_pagini: 320 } }
);

db.carti.updateOne(
   { titlu: "The Marine World - A Natural History of Ocean Life" },
   { $set: { numar_pagini: 256 } }
);

db.carti.updateOne(
   { titlu: "Seaweeds of Britain and Ireland" },
   { $set: { numar_pagini: 400 } }
);

db.carti.updateOne(
   { titlu: "Cronicile din Narnia" },
   { $set: { numar_pagini: 208 } }
);

db.carti.updateOne(
   { titlu: "Marele Gatsby" },
   { $set: { numar_pagini: 224 } }
);

db.carti.updateOne(
   { titlu: "Don Quijote de La Mancha" },
   { $set: { numar_pagini: 1024 } }
);

db.carti.updateOne(
   { titlu: "To Kill a Mockingbird" },
   { $set: { numar_pagini: 336 } }
);

db.carti.updateOne(
   { titlu: "The Great Gatsby" },
   { $set: { numar_pagini: 180 } }
);

db.carti.updateOne(
   { titlu: "1984" },
   { $set: { numar_pagini: 328 } }
);

//modificare data_returnare_efectiva
db.imprumuturi.updateOne(
   {
      titlu_carte: "Poveste dintr-un suflet",
      id_carte: "2001",
      email_cititor: "vladimiravramescu@yahoo.com",
      email_bibliotecar: "andreea.stefanescu@gmail.com"
   },
   {
      $set: { data_returnare_efectiva: ISODate("2023-05-13") }
   }
);

//adaugare la colectia bibliotecari un nou camp, data nasterii
db.bibliotecari.updateMany({}, { $set: { data_nasterii: null } });

db.bibliotecari.updateOne(
  { adresa_email: "mirela.vasilescu@gmail.com" },
  { $set: { data_nasterii: new Date("1990-01-01") } }
);

db.bibliotecari.updateOne(
  { adresa_email: "cristina.radulescu@gmail.com" },
  { $set: { data_nasterii: new Date("1985-03-15") } }
);

db.bibliotecari.updateOne(
  { adresa_email: "roxana.dumitrescu@gmail.com" },
  { $set: { data_nasterii: new Date("1972-07-20") } }
);

db.bibliotecari.updateOne(
  { adresa_email: "andreea.stefanescu@gmail.com" },
  { $set: { data_nasterii: new Date("1994-05-02") } }
);

///////////////////////////////STERGEREA DOCUMENTELOR
db.carti.deleteMany({})
db.bibliotecar.deleteMany({})
db.cititori.deleteMany({})
db.imprumuturi.deleteMany({})

//stergerea unui bibliotecar
db.bibliotecar.deleteOne({ adresa_email: "andreea.stefanescu@gmail.com" });

//stergerea cartilor care au mai putin de 100 pagini
db.carti.deleteMany({ numar_pagini: { $lte: 100 } });

//stergerea imprumuturilor care au fost returnate
db.imprumuturi.deleteMany({
   data_returnare_efectiva: { $ne: null },
   data_returnare_efectiva: { $lt: "$data_returnare" }
});



