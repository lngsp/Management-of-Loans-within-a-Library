//STRUCTURA COLECȚIILOR

//BIBLIOTECARI
db.createCollection("bibliotecari", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["nume_bibliotecar", "adresa_email", "telefon", "adresa", "parola"],
         properties: {
            nume_bibliotecar: {
				bsonType: "object",
				required: ["nume", "prenume"],
				properties: {
				  nume: {
					bsonType: "string",
					description: "Nume familie bibliotecar"
				  },
				  prenume: {
					bsonType: "string",
					description: "Prenume bibliotecar"
				  }
				}
            },
            adresa_email: {
               bsonType: "string",
			   pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
			   description: "Adresa de email bibliotecar"
            },
            telefon: {
               bsonType: "string",
			   pattern: '^0[0-9]{9}$',
			   description: "Numar de telefon bibliotecar"
            },
            adresa: {
               bsonType: "string",
			   description: "Adresa domiciliului bibliotecarului"
            },
            parola: {
               bsonType: "string",
			   description: "Parola bibliotecar"
            }
         }
      }
   }
});

//CARTI
db.createCollection("carti", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["_id", "ISBN", "titlu", "autori", "numar_exemplare", "editura", "anul_publicarii", "carte_introdusa_de", "cuvinte_cheie"],
         properties: {
            _id: {
               bsonType: "string",
			   description: "Id-ul dupa care se gaseste cartea in biblioteca. Id definit de bibliotecar in functie de categoria de carte / cuvintele cheie"
            },
            ISBN: {
               bsonType: "string",
			   description: "Cod international de identificare a cartilor"
            },
            titlu: {
               bsonType: "string",
			   description: "Titlul cartii"
            },
            autori: {
               bsonType: "array",
			   description: "Lista de autori ai cartii",
               items: {
                  bsonType: "object",
                  required: ["nume", "prenume"],
                  properties: {
                     nume: {
                        bsonType: "string"
                     },
                     prenume: {
                        bsonType: "string"
                     }
                  }
               }
            },
            numar_exemplare: {
               bsonType: "int",
			   description: "Numarul de exemplare disponibile in biblioteca"
            },
            editura: {
               bsonType: "string",
			   description: "Editura cartii"
            },
            anul_publicarii: {
               bsonType: "int",
			   description: "Anul publicarii"
            },
            carte_introdusa_de: {
               bsonType: "string",
			   pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
			   description: "Emailul bibliotecarului care a introdus cartea in sistem"
            },
            cuvinte_cheie: {
               bsonType: "array",
			   description: "Categorii din care face parte cartea",
               items: {
                  bsonType: "string"
               }
            }
         }
      }
   }
});

//CITITOR
db.createCollection("cititori", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["nume_cititor", "adresa_email", "adresa", "data_nasterii", "telefon"],
         properties: {
            nume_cititor: {
				bsonType: "object",
				required: ["nume", "prenume"],
				description: "Numele si prenumele cititorului",
				properties: {
				  nume: {
					bsonType: "string",
					description: "Nume familie cititor"
				  },
				  prenume: {
					bsonType: "string",
					description: "Prenume cititor"
				  }
				}
            },
            adresa_email: {
               bsonType: "string",
			   pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
			   description: "Adresa de email a cititorului"
            },
            adresa: {
               bsonType: "string",
			   description: "Adresa domiciliului cititorului"
            },
            data_nasterii: {
               bsonType: "date",
			   description: "Data nasterii a cititorului"
            },
            telefon: {
               bsonType: "string",
			   pattern: '^0[0-9]{9}$',
			   description: "Numarul de telefon al cititorului"
            },
			penalizari: {
			  bsonType: ['double', 'null'],
			  description: 'Punctele de penalizare adunate în funcție de întârzieri/deteriorări'
			}
         }
      }
   }
});

//IMPRUMUTURI
db.createCollection("imprumuturi", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["titlu_carte", "id_carte", "nume_cititor", "email_cititor", "nume_bibliotecar", "email_bibliotecar", "data_imprumut", "data_returnare"],
         properties: {
            titlu_carte: {
               bsonType: "string",
			   description: "Titlul cartii"
            },
            id_carte: {
               bsonType: "string"
            },
            nume_cititor: {
				bsonType: "object",
				required: ["nume", "prenume"],
				description: "Numele cititorului care a luat cartea spre imprumut",
				properties: {
				  nume: {
					bsonType: "string",
					description: "Nume familie cititor"
				  },
				  prenume: {
					bsonType: "string",
					description: "Prenume cititor"
				  }
				}
            },
            email_cititor: {
               bsonType: "string",
               pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
			   description: "Emailul cititorului"
            },
            nume_bibliotecar: {
				bsonType: "object",
				required: ["nume", "prenume"],
				description: "Numele bibliotecarului care a dat cartea spre imprumut",
				properties: {
				  nume: {
					bsonType: "string",
					description: "Nume familie bibliotecar"
				  },
				  prenume: {
					bsonType: "string",
					description: "Prenume bibliotecar"
				  }
				}
            },
            email_bibliotecar: {
               bsonType: "string",
               pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
			   description: "Emailul bibliotecarului care a dat cartea spre imprumut"
            },
            data_imprumut: {
               bsonType: "date",
			   description: "Data la care s-a dat cartea spre imprumut"
            },
            data_returnare: {
               bsonType: "date",
			   description: "Data pana la care trebuie returnata cartea"
            },
            data_returnare_efectiva: {
               bsonType: ["date", "null"],
			   description: "Data la care a fost returnata cartea efectiv"
            }
         }
      }
   }
});