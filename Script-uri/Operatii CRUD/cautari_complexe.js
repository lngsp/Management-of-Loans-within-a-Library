//CAUTARI COMPLEXE

//folosirea cursorilor pentru find() pentru procesari suplimentare
const cursor = db.carti.find({}).sort({ nume_carte: 1 }); // Obține cursorul pentru căutare și sortează rezultatele după nume_carte în ordine crescătoare
while (cursor.hasNext()) {
  const document = cursor.next(); // Obține următorul document din cursor
  //Afisează titlul cărții și numărul exemplarelor
  print(`Titlu carte: ${document.titlu}`);
  print(`Numar exemplare: ${document.numar_exemplare}`);
}

//AGGREGATE

//Editurile si numarul de carti disponibile
db.carti.aggregate([
  {
    $group: {
      _id: "$editura",
      numar_carti: { $sum: 1 }
    }
  }
]);

//numar de exemplare disponibile
db.carti.aggregate([
  {
    $group: {
      _id: null,
      suma_exemplare: { $sum: "$numar_exemplare" }
    }
  }
]);

//carti publicate in anul 2020
db.carti.aggregate([
  {
    $match: {
      anul_publicarii: { $gte: 2020 }
    }
  },
  {
    $project: {
      titlu: 1,
      autori: 1
    }
  }
]);

//calculul si adaugarea varstei cititorilor care sunt majori
db.cititori.aggregate([
  {
    $addFields: {
      age: {
        $floor: {
          $divide: [
            {
              $subtract: [new Date(), "$data_nasterii"]
            },
            1000 * 60 * 60 * 24 * 365 //numărul de milisecunde într-un an.
          ]
        }
      }
    }
  },
  {
    $match: {
      age: { $gte: 18 }
    }
  },
  {
    $project: {
      _id: 0,
      nume: 1,
      prenume: 1,
      data_nasterii: 1,
      age: 1
    }
  }
]);

//Utilizarea operatorului și $addFields pentru a adăuga un nou câmp numit carti_imprumutate în colecția cititori, 
//care va conține toate cărțile împrumutate de fiecare cititor
db.cititori.aggregate([
  {
    $lookup: {
      from: "imprumuturi",
      localField: "adresa_email",
      foreignField: "email_cititor",
      as: "imprumuturi"
    }
  },
  {
    $addFields: {
      carti_imprumutate: "$imprumuturi.titlu_carte"
    }
  },
  {
    $project: {
      _id: 0,
      nume: 1,
      email: "$adresa_email",
      carti_imprumutate: 1
    }
  }
]);

//Utilizarea operatorului $unwind pentru a descompune câmpul carti_imprumutate și a obține fiecare carte împrumutată într-un document separat în colecția cititori:
db.cititori.aggregate([
  {
    $lookup: {
      from: "imprumuturi",
      localField: "adresa_email",
      foreignField: "email_cititor",
      as: "imprumuturi"
    }
  },
  {
    $unwind: "$imprumuturi"
  },
  {
    $project: {
      _id: 0,
      nume: 1,
      email: "$adresa_email",
      carte_imprumutata: "$imprumuturi.titlu_carte"
    }
  }
]);

//Acest pipeline folosește o etapă suplimentară pentru a face filtrarea și proiecția în cadrul colecției "imprumuturi", astfel încât
// să obțineți doar câmpul "titlu_carte" din documentele potrivite. Apoi, acest rezultat este atribuit câmpului "carti_imprumutate" în rezultatul final.
db.cititori.aggregate([
  {
    $lookup: {
      from: "imprumuturi",
      let: { email: "$adresa_email" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$email_cititor", "$$email"] }
          }
        },
        {
          $project: {
            _id: 0,
            titlu_carte: 1
          }
        }
      ],
      as: "carti_imprumutate"
    }
  },
  {
    $project: {
      _id: 0,
      nume: 1,
      email: "$adresa_email",
      carti_imprumutate: 1
    }
  }
]);

//căutarea cărților publicate într-un anumit interval de ani
db.carti.aggregate([
  {
    $match: {
      anul_publicarii: { $gte: 2010, $lte: 2020 }
    }
  },
  {
    $project: {
      titlu: 1,
      anul_publicarii: 1
    }
  },
  {
    $sort: {
      anul_publicarii: 1
    }
  }
]);



