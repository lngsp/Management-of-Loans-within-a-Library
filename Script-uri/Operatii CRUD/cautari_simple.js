//CAUTARI SIMPLE 

//imprumuturile care nu au fost inca returnate
db.imprumuturi.find({ data_returnare_efectiva: null }).pretty();

//cartile care au anumite cuvinte cheie 
db.carti.find({ cuvinte_cheie: "animale" });
db.carti.find({ cuvinte_cheie: { $in: ["literatura contemporana", "beletristica"] } });
db.carti.find({ cuvinte_cheie: "dragoste" });
db.carti.find({ cuvinte_cheie: "fictiune"}).sort({titlu: 1});

//sortarea cartilor alfabetic dupa titlu
db.carti.find().sort({ titlu: 1 })

//afisarea cartilor ce au un numra de exemplare mai mare decat 3
db.carti.find(
  { numar_exemplare: { $gt: 3 } },
  { _id:0, titlu: 1, autori: 1, numar_exemplare:1}
);

//afisarea bibliotecarilor nascuti intre anii 1970 si 1980
db.bibliotecari.find({
  data_nasterii: {
    $gte: new Date("1970-01-01"),
    $lte: new Date("1980-12-31")
  }
});

//cititorii al caror nr de telefon se termina in 77
db.cititori.find(
  { telefon: /77$/ }
);

//cititorii care au numele cu D
db.cititori.find({
  "nume_cititor.nume": /^D/
});

//afiseaza imprumuturile sortate dupa data de imprumut descresctoare 
db.imprumuturi.find({}, {_id:0, titlu_carte: 1, nume_cititor:1, nume_bibliotecar: 1, data_imprumut:1 }).sort({ data_imprumut: -1 });

//afiseaza ultimele 1/2 imprumuturi ale unui cititor sortate dupa data de imprumut descresctoare 
db.imprumuturi.find({email_cititor: "vladimiravramescu@yahoo.com"}, {_id:0, titlu_carte: 1, nume_cititor:1, nume_bibliotecar: 1, data_imprumut:1 }).sort({ data_imprumut: -1 }).limit(1);
db.imprumuturi.find({email_cititor: "vladimiravramescu@yahoo.com"}, {_id:0, titlu_carte: 1, nume_cititor:1, nume_bibliotecar: 1, data_imprumut:1 }).sort({ data_imprumut: -1 }).limit(2);

//afisarea cartilor sortate dupa id crescator
db.carti.find({}, { _id: 1, titlu: 1, autori: 1 }).sort({ _id: 1 });

//afisarea primelor 3 carti sortate dupa id crescator
db.carti.find({}, { _id: 1, titlu: 1, autori: 1 }).sort({ _id: 1 }).limit(3);

//afisare carti date spre imprumut de un anumit bibliotecar
db.imprumuturi.find({ email_bibliotecar: "andreea.stefanescu@gmail.com"});

//cautare cititori care folosesc o adresa de email de la Google (gmail)
db.cititori.find({ adresa_email: { $regex: "gmail.com" } });

// Returnarea doar a atributelor "titlu" și "autori" pentru cărțile din colecția "carti"
db.carti.find({}, { titlu: 1, autori: 1 });

// Excluderea atributului "parola" pentru bibliotecarii din colecția "bibliotecari"
db.bibliotecari.find({}, { parola: 0 });

// Căutare documente în colecția "carti" cu atributul "editura" inexistent
db.carti.find({ editura: { $exists: false } });

// Sortarea crescătoare după anul publicării pentru cărțile din colecția "carti"
db.carti.find().sort({ anul_publicarii: 1 });

// Sortarea descrescătoare după data de returnare pentru imprumuturile din colecția "imprumuturi"
db.imprumuturi.find().sort({ data_returnare: -1 });

//cautare paginata
const numarDocumentePePagina = 10; // Numărul de documente dorit pe pagină
const numarPagina = 2; // Numărul paginii dorite

const skipDocuments = (numarPagina - 1) * numarDocumentePePagina;

db.carti.find({})
  .skip(skipDocuments)
  .limit(numarDocumentePePagina);
