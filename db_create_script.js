db.users.insert(
	[
		{
			name: "testman",
			login: "admin",
			country: "Poland",
			email: "testman@localhost.pl",
			password: "admin",
		}
	]
);

db.dictionaries.insert(
	[
		{
			name: "eng_pol_trns",
			from: "ENG",
			to: "POL",
		},
		{
			name: "esp_pol_trns",
			from: "ESP",
			to: "POL",
		},
		{
			name: "pol_esp_trns",
			from: "POL",
			to: "ESP",
		}
	]
);

db.categories.insert(
	[
		{
			name: "animals",
		},
		{
			name: "other",
		},
		{
			name: "life",
		},
		{
			name: "sport",
		},
		{
			name: "nature",
		},
		{
			name: "geography",
		},
		{
			name: "music",
		},
		{
			name: "hobby",
		},
		{
			name: "health",
		},
		{
			name: "family",
		},
		{
			name: "food",
		}
	]
);

db.eng_pol_trns.insert(
	[
		{
			word: "dog",
			translations: ["pies"],
			categories: ["animals"],
			level: "A1"
		},
		{
			word: "dream",
			translations: ["sen", "marzenie", "marzyc", "snic"],
			categories: ["other", "life"],
			level: "A1"
		},
		{
			word: "cat",
			translations: ["kot"],
			categories: ["animals"],
			level: "A1"
		},
		{
			word: "volleyball",
			translations: ["siatkowka"],
			categories: ["sport"],
			level: "A1"
		},
		{
			word: "bird",
			translations: ["ptak"],
			categories: ["animals", "nature"],
			level: "A1"
		},
		{
			word: "mountain",
			translations: ["gora", "gorski"],
			categories: ["nature"],
			level: "A1"
		},
		{
			word: "piano",
			translations: ["fortepian", "pianino"],
			categories: ["music", "hobby"],
			level: "A1"
		},
		{
			word: "guitar",
			translations: ["gitara"],
			categories: ["music", "hobby"],
			level: "A1"
		},
		{
			word: "father",
			translations: ["ojciec"],
			categories: ["family", "life"],
			level: "A1"
		},
		{
			word: "mother",
			translations: ["matka"],
			categories: ["family", "life"],
			level: "A1"
		},
		{
			word: "apple",
			translations: ["jablko"],
			categories: ["food"],
			level: "A1"
		},
		{
			word: "egg",
			translations: ["jajko"],
			categories: ["food"],
			level: "A1"
		},
		{
			word: "hard-boiled egg",
			translations: ["jajko ugotowane na twardo"],
			categories: ["food"],
			level: "B1"
		},
		{
			word: "soft-boiled egg",
			translations: ["jajko ugotowane na miekko"],
			categories: ["food"],
			level: "B1"
		},
		{
			word: "stew",
			translations: ["potrawka"],
			categories: ["food"],
			level: "B2"
		},
		{
			word: "dough",
			translations: ["ciasto"],
			categories: ["food"],
			level: "B2"
		},
		{
			word: "leukemia",
			translations: ["bialaczka"],
			categories: ["health"],
			level: "C1"
		},
		{
			word: "meningitis",
			translations: ["zapalenie opon mozgowych"],
			categories: ["health"],
			level: "C2"
		},
		{
			word: "basketball",
			translations: ["koszykowka"],
			categories: ["sport"],
			level: "A1"
		},
		{
			word: "football",
			translations: ["pilka nozna"],
			categories: ["sport"],
			level: "A1"
		},
		{
			word: "swimming",
			translations: ["plywanie"],
			categories: ["sport"],
			level: "A1"
		},
		{
			word: "beetle",
			translations: ["zuk"],
			categories: ["animals"],
			level: "B2"
		},
		{
			word: "zebra",
			translations: ["zebra"],
			categories: ["animals"],
			level: "A2"
		},
		{
			word: "elephant",
			translations: ["slon"],
			categories: ["animals"],
			level: "A1"
		},
		{
			word: "tree",
			translations: ["drzewo"],
			categories: ["nature"],
			level: "A1"
		},
		{
			word: "willow",
			translations: ["wierzba"],
			categories: ["nature"],
			level: "B2"
		},
		{
			word: "oak",
			translations: ["dab"],
			categories: ["nature"],
			level: "B2"
		},
		{
			word: "flower",
			translations: ["kwiat"],
			categories: ["nature"],
			level: "A1"
		},
		{
			word: "rose",
			translations: ["roza"],
			categories: ["nature"],
			level: "A1"
		},
		{
			word: "sunflower",
			translations: ["slonecznik"],
			categories: ["nature"],
			level: "B1"
		},
		{
			word: "Germany",
			translations: ["Niemcy"],
			categories: ["geography"],
			level: "A1"
		},
		{
			word: "England",
			translations: ["Anglia"],
			categories: ["geography"],
			level: "A1"
		},
		{
			word: "Poland",
			translations: ["Polska"],
			categories: ["geography"],
			level: "A1"
		},
		{
			word: "Spain",
			translations: ["Hiszpania"],
			categories: ["geography"],
			level: "A1"
		},
		{
			word: "drawing",
			translations: ["rysunek","rysowanie"],
			categories: ["hobby"],
			level: "A2"
		},
		{
			word: "painting",
			translations: ["obraz","malowanie"],
			categories: ["hobby"],
			level: "A2"
		},
		{
			word: "sculpture",
			translations: ["rzezbiarstwo"],
			categories: ["hobby"],
			level: "B1"
		},
		{
			word: "river",
			translations: ["rzeka"],
			categories: ["nature"],
			level: "A1"
		},
		{
			word: "yellow",
			translations: ["zolty"],
			categories: ["other"],
			level: "A1"
		},
		{
			word: "red",
			translations: ["czerwony"],
			categories: ["other"],
			level: "A1"
		},
		{
			word: "blue",
			translations: ["niebieski"],
			categories: ["other"],
			level: "A1"
		},
		{
			word: "green",
			translations: ["zielony"],
			categories: ["other"],
			level: "A1"
		},
		{
			word: "sister",
			translations: ["siostra"],
			categories: ["family"],
			level: "A1"
		},
		{
			word: "brother",
			translations: ["brat"],
			categories: ["family"],
			level: "A1"
		},
		{
			word: "computer",
			translations: ["komputer"],
			categories: ["hobby"],
			level: "A2"
		},
		{
			word: "car",
			translations: ["samochod"],
			categories: ["other"],
			level: "A1"
		},
		{
			word: "meat",
			translations: ["mieso"],
			categories: ["food"],
			level: "B1"
		}
	]
);

db.esp_pol_trns.insert(
	[
		{
			word: "el perro",
			translations: ["pies"],
			categories: ["animals"],
			level: "A1"
		},
		{
			word: "el sueno",
			translations: ["sen", "marzenie"],
			categories: ["other", "life"],
			level: "A1"
		},
		{
			word: "el gato",
			translations: ["kot"],
			categories: ["animals"],
			level: "A2"
		},
		{
			word: "el ciudad",
			translations: ["miasto"],
			categories: ["other", "geography", "life"],
			level: "A2"
		},
		{
			word: "el pajaro",
			translations: ["ptak"],
			categories: ["animals", "nature"],
			level: "A2"
		},
		{
			word: "la montana",
			translations: ["gora", "gorski"],
			categories: ["nature"],
			level: "A1"
		},
		{
			word: "el piano",
			translations: ["fortepian", "pianino"],
			categories: ["music", "hobby"],
			level: "A1"
		},
		{
			word: "la guitarra",
			translations: ["gitara"],
			categories: ["music", "hobby"],
			level: "A1"
		},
		{
			word: "el baloncesto",
			translations: ["koszykowka"],
			categories: ["sport"],
			level: "A1"
		},
		{
			word: "el futbol",
			translations: ["pilka nozna"],
			categories: ["sport"],
			level: "A1"
		},
		{
			word: "el natacion",
			translations: ["plywanie"],
			categories: ["sport"],
			level: "A1"
		},
		{
			word: "el escarabajo",
			translations: ["zuk"],
			categories: ["animals"],
			level: "B2"
		},
		{
			word: "la cebra",
			translations: ["zebra"],
			categories: ["animals"],
			level: "A2"
		},
		{
			word: "el elefante",
			translations: ["slon"],
			categories: ["animals"],
			level: "A1"
		},
		{
			word: "el arbol",
			translations: ["drzewo"],
			categories: ["nature"],
			level: "A1"
		},
		{
			word: "el sauce",
			translations: ["wierzba"],
			categories: ["nature"],
			level: "B2"
		},
		{
			word: "el roble",
			translations: ["dab"],
			categories: ["nature"],
			level: "B2"
		},
		{
			word: "la flor",
			translations: ["kwiat"],
			categories: ["nature"],
			level: "A1"
		},
		{
			word: "la rosa",
			translations: ["roza"],
			categories: ["animals"],
			level: "A1"
		},
		{
			word: "el girasol",
			translations: ["slonecznik"],
			categories: ["nature"],
			level: "B1"
		},
		{
			word: "la Alemania",
			translations: ["Niemcy"],
			categories: ["geography"],
			level: "A1"
		},
		{
			word: "la Polonia",
			translations: ["Polska"],
			categories: ["geography"],
			level: "A1"
		},
		{
			word: "la Inglaterra",
			translations: ["Anglia"],
			categories: ["music", "hobby"],
			level: "A1"
		},
		{
			word: "la Espana",
			translations: ["Hiszpania"],
			categories: ["geography"],
			level: "A1"
		},
		{
			word: "el dibujo",
			translations: ["rysowanie"],
			categories: ["hobby"],
			level: "A2"
		},
		{
			word: "la pintura",
			translations: ["malarstwo"],
			categories: ["hobby"],
			level: "A2"
		},
		{
			word: "la escultura",
			translations: ["rzezbiarstwo"],
			categories: ["hobby"],
			level: "B1"
		},
		{
			word: "el rio",
			translations: ["rzeka"],
			categories: ["nature"],
			level: "A1"
		},
		{
			word: "amarillo",
			translations: ["zolty"],
			categories: ["other"],
			level: "A1"
		},
		{
			word: "rojo",
			translations: ["czerwony"],
			categories: ["other"],
			level: "A1"
		},
		{
			word: "azul",
			translations: ["niebieski"],
			categories: ["other"],
			level: "A1"
		},
		{
			word: "verde",
			translations: ["zielony"],
			categories: ["other"],
			level: "A1"
		},
		{
			word: "la madre",
			translations: ["matka"],
			categories: ["family"],
			level: "A1"
		},
		{
			word: "el padre",
			translations: ["ojciec"],
			categories: ["family"],
			level: "A1"
		},
		{
			word: "el huevo",
			translations: ["jajko"],
			categories: ["food"],
			level: "A1"
		},
		{
			word: "la masa",
			translations: ["ciasto"],
			categories: ["food"],
			level: "B2"
		},
		{
			word: "la manzana",
			translations: ["jablko"],
			categories: ["food"],
			level: "A1"
		},
		{
			word: "el huevo pasado del agua",
			translations: ["jajko ugotowane na miekko"],
			categories: ["food"],
			level: "B1"
		},
		{
			word: "el huevo duro",
			translations: ["jajko ugotowane na twardo"],
			categories: ["food"],
			level: "B1"
		},
		{
			word: "la leucemia",
			translations: ["bialaczka"],
			categories: ["health"],
			level: "C1"
		},
		{
			word: "la meningitis",
			translations: ["zapalenie opon mozgowych"],
			categories: ["health"],
			level: "C2"
		},
		{
			word: "el estofado",
			translations: ["potrawka"],
			categories: ["food"],
			level: "B2"
		},
		{
			word: "la hermana",
			translations: ["siostra"],
			categories: ["family"],
			level: "A1"
		},
		{
			word: "el hermano",
			translations: ["siostra"],
			categories: ["family"],
			level: "A1"
		},
		{
			word: "el ordenador",
			translations: ["komputer"],
			categories: ["hobby"],
			level: "A2"
		},
		{
			word: "el coche",
			translations: ["samochod"],
			categories: ["other"],
			level: "A1"
		},
		{
			word: "la carne",
			translations: ["mieso"],
			categories: ["food"],
			level: "B1"
		}
	]
);

db.pol_eng_trns.insert(
	[
		{
			word: "pies",
			translations: ["dog"],
			categories: ["animals"],
			level: "A1"
		},
		{
			word: "sen",
			translations: ["dream"],
			categories: ["other", "life"],
			level: "A2"
		},
		{
			word: "kot",
			translations: ["cat"],
			categories: ["animals"],
			level: "A2"
		},
		{
			word: "miasto",
			translations: ["city"],
			categories: ["other", "geography", "life"],
			level: "A1"
		},
		{
			word: "ptak",
			translations: ["bird"],
			categories: ["animals", "nature"],
			level: "A2"
		},
		{
			word: "gora",
			translations: ["mountain"],
			categories: ["nature"],
			level: "A1"
		},
		{
			word: "pianino",
			translations: ["piano"],
			categories: ["music", "hobby"],
			level: "A1"
		},
		{
			word: "gitara",
			translations: ["guitar"],
			categories: ["music", "hobby"],
			level: "A1"
		},
		{
			word: "ojciec",
			translations: ["father"],
			categories: ["family","life"],
			level: "A1"
		},
		{
			word: "matka",
			translations: ["mother"],
			categories: ["family", "life"],
			level: "A1"
		},
		{
			word: "jablko",
			translations: ["apple"],
			categories: ["food"],
			level: "A1"
		},
		{
			word: "jajko",
			translations: ["egg"],
			categories: ["food"],
			level: "A1"
		},
		{
			word: "jajko ugotowane na twardo",
			translations: ["hard-boiled egg"],
			categories: ["food"],
			level: "B1"
		},
		{
			word: "jajko ugotowane na miekko",
			translations: ["soft-boiled egg"],
			categories: ["food"],
			level: "B1"
		},
		{
			word: "potrawka",
			translations: ["stew"],
			categories: ["food"],
			level: "B1"
		},
		{
			word: "ciasto",
			translations: ["dough"],
			categories: ["food"],
			level: "B1"
		},
		{
			word: "bialaczka",
			translations: ["leukemia"],
			categories: ["health"],
			level: "C1"
		},
		{
			word: "zapalenie opon mozgowych",
			translations: ["meningitis"],
			categories: ["health"],
			level: "C2"
		},
		{
			word: "siostra",
			translations: ["sister"],
			categories: ["family"],
			level: "A1"
		},
		{
			word: "brat",
			translations: ["brother"],
			categories: ["family"],
			level: "A1"
		},
		{
			word: "komputer",
			translations: ["computer"],
			categories: ["hobby"],
			level: "A2"
		},
		{
			word: "samochod",
			translations: ["car"],
			categories: ["other"],
			level: "A1"
		},
		{
			word: "meat",
			translations: ["mieso"],
			categories: ["food"],
			level: "B1"
		}
	]
);