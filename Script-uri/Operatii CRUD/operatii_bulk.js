//BULK

db.bibliotecari.bulkWrite([
   {
      insertOne: {
         document: {
            nume_bibliotecar: {
               nume: "Popescu",
               prenume: "Alexandru"
            },
            adresa_email: "alexandru.popescu@gmail.com",
            telefon: "0722112233",
            adresa: "Strada Libertății, Nr. 5, Iași",
            parola: "bibliotecar789"
         }
      }
   },
   {
      insertOne: {
         document: {
            nume_bibliotecar: {
               nume: "Ionescu",
               prenume: "Maria"
            },
            adresa_email: "maria.ionescu@gmail.com",
            telefon: "0733445566",
            adresa: "Bulevardul Independenței, Nr. 8, Iași",
            parola: "parolabibliotecar2"
         }
      }
   },
   {
      insertOne: {
         document: {
            nume_bibliotecar: {
               nume: "Constantinescu",
               prenume: "Ioan"
            },
            adresa_email: "ioan.constantinescu@gmail.com",
            telefon: "0744556677",
            adresa: "Strada Victoriei, Nr. 15, Iași",
            parola: "securitate456"
         }
      }
   },
   {
      updateOne: {
         filter: { nume_bibliotecar: { nume: "Radulescu", prenume: "Cristina" } },
         update: {
            $set: {
               adresa_email: "cristina.radulescu@yahoo.com",
               telefon: "0733999888"
            }
         }
      }
   },
   {
      deleteOne: {
         filter: { nume_bibliotecar: { nume: "Dumitrescu", prenume: "Roxana" } }
      }
   },
   {
      deleteMany: {
         filter: { telefon: { $regex: /07$/ } }
      }
   }
]);

