//OPERATII CRUD 

///////////////////////////////INSERAREA DATELOR MULTIPLE

	//BIBLIOTECARI
db.bibliotecari.insertMany([
   {
      nume_bibliotecar: {
         nume: "Vasilescu",
         prenume: "Mirela"
      },
      adresa_email: "mirela.vasilescu@gmail.com",
      telefon: "0722334455",
      adresa: "Strada Mihai Eminescu, Nr. 7, Iași",
      parola: "bibliotecar123"
   },
   {
      nume_bibliotecar: {
         nume: "Radulescu",
         prenume: "Cristina"
      },
      adresa_email: "cristina.radulescu@gmail.com",
      telefon: "0733885777",
      adresa: "Aleea Trandafirilor, Nr. 3, Iași",
      parola: "parolabibliotecar"
   },
   {
      nume_bibliotecar: {
         nume: "Dumitrescu",
         prenume: "Roxana"
      },
      adresa_email: "roxana.dumitrescu@gmail.com",
      telefon: "0744997888",
      adresa: "Strada Gheorghe Asachi, Nr. 10, Iași",
      parola: "securitate123"
   },
   {
      nume_bibliotecar: {
         nume: "Stefanescu",
         prenume: "Andreea"
      },
      adresa_email: "andreea.stefanescu@gmail.com",
      telefon: "0722445566",
      adresa: "Bulevardul Carol I, Nr. 12, Iași",
      parola: "bibliotecar456"
   }
]);



	//CARTI
db.carti.insertMany([
   { 
	_id: "1001",
	ISBN: "9786303190587",
	titlu: "Regina Charlotte",
	autori: [
		{ nume: "Quinn", prenume: "Julia" },
		{ nume: "Rhimes", prenume: "Shonda" }
	],
	numar_exemplare: 2,
	editura: "Litera",
	anul_publicarii: 2023,
	carte_introdusa_de: "mirela.vasilescu@gmail.com",
	cuvinte_cheie: ["roman", "dragoste", "beletristica", "istorie", "Anglia", "politica", "curte regala"]
   },
   { 
	_id: "1002",
	ISBN: "70164",
	titlu: "Am scris o carte despre noi",
	autori: [
		{ nume: "Binder", prenume: "Irina" }
	],
	numar_exemplare: 5,
	editura: "Bookzone",
	anul_publicarii: 2022,
	carte_introdusa_de: "mirela.vasilescu@gmail.com",
	cuvinte_cheie: ["roman", "dragoste", "beletristica", "fictiune", "literatura contemporana", "literatura romana"]
   },
  { 
	_id: "1003",
	ISBN: "9786063370281",
	titlu: "Aleea cu licurici",
	autori: [
		{ nume: "Hannah", prenume: "Kristin" }
	],
	numar_exemplare: 3,
	editura: "Litera",
	anul_publicarii: 2021,
	carte_introdusa_de: "mirela.vasilescu@gmail.com",
	cuvinte_cheie: ["dragoste", "beletristica", "fictiune", "literatura contemporana", "young adult"]
   },
   {
	_id: "2001",
	ISBN: "9786069973930",
	titlu: "Poveste dintr-un suflet",
	autori: [
		{ nume: "Coelho", prenume: "Paulo" }
	],
	numar_exemplare: 1,
	editura: "Humanitas",
	anul_publicarii: 2022,
	carte_introdusa_de: "cristina.radulescu@gmail.com",
	cuvinte_cheie: ["inspirational", "filozofie", "autodezvoltare"]
   },
   {
	_id: "3001",
	ISBN: "9786068574233",
	titlu: "Harry Potter și Piatra Filozofală",
	autori: [
		{ nume: "Rowling", prenume: "J.K." }
	],
	numar_exemplare: 10,
	editura: "Arthur",
	anul_publicarii: 1997,
	carte_introdusa_de: "mirela.vasilescu@gmail.com",
	cuvinte_cheie: ["fictiune", "magie", "aventura"]
   },
   {
	_id: "4001",
	ISBN: "9780957394629",
	titlu: "The Marine World - A Natural History of Ocean Life",
	autori: [
		{ nume: "Dipper", prenume: "Frances" }
	],
	numar_exemplare: 2,
	editura: "Wild Nature Press",
	anul_publicarii: 2016,
	carte_introdusa_de: "roxana.dumitrescu@gmail.com",
	cuvinte_cheie: ["enciclopedii", "animale", "ocean", "engleza"]
   },
   {
	_id: "4002",
	ISBN: "9780995567337",
	titlu: "Seaweeds of Britain and Ireland",
	autori: [
		{ nume: "Bunker", prenume: "Francis" },
		{ nume: "Brodie", prenume: "Juliet A." },
		{ nume: "Maggs", prenume: "Christine A." },
		{ nume: "Bunker", prenume: "Anne R." }
	],
	numar_exemplare: 3,
	editura: "Wild Nature Press",
	anul_publicarii: 2017,
	carte_introdusa_de: "cristina.radulescu@gmail.com",
	cuvinte_cheie: ["enciclopedii", "plante", "ocean", "engleza"]
   },
   { 
	_id: "3002",
	ISBN: "9786061234567",
	titlu: "Cronicile din Narnia",
	autori: [
		{ nume: "Lewis", prenume: "C.S." }
	],
	numar_exemplare: 3,
	editura: "Litera",
	anul_publicarii: 1950,
	carte_introdusa_de: "roxana.dumitrescu@gmail.com",
	cuvinte_cheie: ["fictiune", "aventura", "literatura pentru copii"]
   },
   { 
	_id: "3003",
	ISBN: "9786067890123",
	titlu: "Marele Gatsby",
	autori: [
		{ nume: "Fitzgerald", prenume: "F. Scott" }
	],
	numar_exemplare: 2,
	editura: "Humanitas",
	anul_publicarii: 1925,
	carte_introdusa_de: "roxana.dumitrescu@gmail.com",
	cuvinte_cheie: ["roman", "istorie", "drama"]
   },
   { 
	_id: "1004",
	ISBN: "9786063456789",
	titlu: "Don Quijote de La Mancha",
	autori: [
		{ nume: "Cervantes", prenume: "Miguel de" }
	],
	numar_exemplare: 4,
	editura: "Polirom",
	anul_publicarii: 1605,
	carte_introdusa_de: "roxana.dumitrescu@gmail.com",
	cuvinte_cheie: ["roman", "umor", "clasici"]
   },
   {
      _id: "5001",
      ISBN: "978-0061120084",
      titlu: "To Kill a Mockingbird",
      autori: [
         {
            nume: "Lee",
            prenume: "Harper"
         }
      ],
      numar_exemplare: 5,
      editura: "Harper Perennial Modern Classics",
      anul_publicarii: 1960,
      carte_introdusa_de: "roxana.dumitrescu@gmail.com",
      cuvinte_cheie: ["fiction", "classic", "social issues"]
   },
   {
      _id: "1005",
      ISBN: "978-0743273565",
      titlu: "The Great Gatsby",
      autori: [
         {
            nume: "Fitzgerald",
            prenume: "F. Scott"
         }
      ],
      numar_exemplare: 3,
      editura: "Scribner",
      anul_publicarii: 1925,
      carte_introdusa_de: "andreea.stefanescu@gmail.com",
      cuvinte_cheie: ["fictiune", "dragoste", "jazz age"]
   },
   {
      _id: "5002",
      ISBN: "978-1451673319",
      titlu: "1984",
      autori: [
         {
            nume: "Orwell",
            prenume: "George"
         }
      ],
      numar_exemplare: 7,
      editura: "Signet Classics",
      anul_publicarii: 1949,
      carte_introdusa_de: "andreea.stefanescu@gmail.com",
      cuvinte_cheie: ["fictiune", "distopica", "politica"]
   }
]);


	//CITITORI
db.cititori.insertMany([
  {
    nume_cititor: {
      nume: "Dragomir",
      prenume: "Irina"
    },
    adresa_email: "irinadragomir@gmail.com",
    adresa: "Strada Luminii, Nr. 7, Sibiu",
    data_nasterii: ISODate("1990-09-15T00:00:00Z"),
    telefon: "0722334455",
    penalizari: 0.3
  },
  {
    nume_cititor: {
      nume: "Avramescu",
      prenume: "Vladimir"
    },
    adresa_email: "vladimiravramescu@yahoo.com",
    adresa: "Aleea Florilor, Nr. 3, Iași",
    data_nasterii: ISODate("1985-07-28T00:00:00Z"),
    telefon: "0733885777",
    penalizari: 0.7
  },
  {
    nume_cititor: {
      nume: "Constantinescu",
      prenume: "Andreea"
    },
    adresa_email: "andreea.constantinescu@gmail.com",
    adresa: "Strada Zorilor, Nr. 10, Brașov",
    data_nasterii: ISODate("1994-03-04T00:00:00Z"),
    telefon: "0744997888",
    penalizari: 0.2
  },
  {
    nume_cititor: {
      nume: "Vasilescu",
      prenume: "Simona"
    },
    adresa_email: "simonavasilescu@gmail.com",
    adresa: "Strada Libertății, Nr. 12, Iași",
    data_nasterii: ISODate("1992-06-10T00:00:00Z"),
    telefon: "0722445566",
    penalizari: null
  },
  {
    nume_cititor: {
      nume: "Munteanu",
      prenume: "Alexandru"
    },
    adresa_email: "alexandr.munteanu@yahoo.com",
    adresa: "Strada Grigore Ureche, Nr. 8, Iași",
    data_nasterii: ISODate("1987-04-18T00:00:00Z"),
    telefon: "0733778899",
    penalizari: 1.2
  },
  {
    nume_cititor: {
      nume: "Diaconu",
      prenume: "Elena"
    },
    adresa_email: "elena.diaconu@gmail.com",
    adresa: "Bulevardul Ștefan cel Mare, Nr. 5, Iași",
    data_nasterii: ISODate("1990-12-25T00:00:00Z"),
    telefon: "0744556677",
    penalizari: null
  },
  {
    nume_cititor: {
      nume: "Dumitrașcu",
      prenume: "Mircea"
    },
    adresa_email: "mircea.dumitrascu@gmail.com",
    adresa: "Strada Lăpușneanu, Nr. 9, Iași",
    data_nasterii: ISODate("1995-07-08T00:00:00Z"),
    telefon: "0744667700",
    penalizari: null
  },
  {
    nume_cititor: {
      nume: "Popovici",
      prenume: "Roxana"
    },
    adresa_email: "roxana.popovici@gmail.com",
    adresa: "Strada Cuza Vodă, Nr. 14, Iași",
    data_nasterii: ISODate("1988-11-02T00:00:00Z"),
    telefon: "0744997888",
    penalizari: null
  }
]);

	//IMPRUMUTURI
db.imprumuturi.insertMany([
   {
      titlu_carte: "The Marine World - A Natural History of Ocean Life",
      id_carte: "4001",
      nume_cititor: {
         nume: "Popovici",
         prenume: "Roxana"
      },
      email_cititor: "roxana.popovici@gmail.com",
      nume_bibliotecar: {
         nume: "Radulescu",
         prenume: "Cristina"
      },
      email_bibliotecar: "cristina.radulescu@gmail.com",
      data_imprumut: ISODate("2023-05-15"),
      data_returnare: ISODate("2023-05-29"),
      data_returnare_efectiva: null
   },
   {
      titlu_carte: "1984",
      id_carte: "5002",
      nume_cititor: {
         nume: "Dragomir",
         prenume: "Irina"
      },
      email_cititor: "irinadragomir@gmail.com",
      nume_bibliotecar: {
         nume: "Radulescu",
         prenume: "Cristina"
      },
      email_bibliotecar: "cristina.radulescu@gmail.com",
      data_imprumut: ISODate("2023-05-15"),
      data_returnare: ISODate("2023-05-29"),
      data_returnare_efectiva: null
   },
   {
      titlu_carte: "Poveste dintr-un suflet",
      id_carte: "2001",	
      nume_cititor: {
         nume: "Avramescu",
         prenume: "Vladimir"
      },
      email_cititor: "vladimiravramescu@yahoo.com",
      nume_bibliotecar: {
         nume: "Stefanescu",
         prenume: "Andreea"
      },
      email_bibliotecar: "andreea.stefanescu@gmail.com",
      data_imprumut: ISODate("2023-05-01"),
      data_returnare: ISODate("2023-05-15"),
      data_returnare_efectiva: null
   },
   {
      titlu_carte: "Aleea cu licurici",
      id_carte: "1003",	
      nume_cititor: {
         nume: "Avramescu",
         prenume: "Vladimir"
      },
      email_cititor: "vladimiravramescu@yahoo.com",
      nume_bibliotecar: {
         nume: "Stefanescu",
         prenume: "Andreea"
      },
      email_bibliotecar: "andreea.stefanescu@gmail.com",
      data_imprumut: ISODate("2023-05-01"),
      data_returnare: ISODate("2023-05-15"),
      data_returnare_efectiva: null
   },
]);