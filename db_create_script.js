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
	]
);

db.eng_pol_trns.insert(
	[
		{
			word: "dog",
			translations: ["pies"],
			categories: ["animals"]
		},
		{
			word: "dream",
			translations: ["sen", "marzenie", "marzyc", "snic"],
			categories: ["other", "life"]
		},
		{
			word: "cat",
			translations: ["kot"],
			categories: ["animals"]
		},
		{
			word: "volleyball",
			translations: ["siatkowka"],
			categories: ["sport"]
		},
		{
			word: "bird",
			translations: ["ptak"],
			categories: ["animals", "nature"]
		},
		{
			word: "mountain",
			translations: ["gora", "gorski"],
			categories: ["nature"]
		},
		{
			word: "piano",
			translations: ["fortepian", "pianino"],
			categories: ["music", "hobby"]
		},
		{
			word: "guitar",
			translations: ["gitara"],
			categories: ["music", "hobby"]
		}
	]
);

db.esp_pol_trns.insert(
	[
		{
			word: "el perro",
			translations: ["pies"],
			categories: ["animals"]
		},
		{
			word: "el sueno",
			translations: ["sen", "marzenie"],
			categories: ["other", "life"]
		},
		{
			word: "el gato",
			translations: ["kot"],
			categories: ["animals"]
		},
		{
			word: "el ciudad",
			translations: ["miasto"],
			categories: ["other", "geography", "life"]
		},
		{
			word: "el pajaro",
			translations: ["ptak"],
			categories: ["animals", "nature"]
		},
		{
			word: "la montana",
			translations: ["gora", "gorski"],
			categories: ["nature"]
		},
		{
			word: "el piano",
			translations: ["fortepian", "pianino"],
			categories: ["music", "hobby"]
		},
		{
			word: "la guitarra",
			translations: ["gitara"],
			categories: ["music", "hobby"]
		}
	]
);

db.pol_eng_trns.insert(
	[
		{
			word: "pies",
			translations: ["dog"],
			categories: ["animals"]
		},
		{
			word: "sen",
			translations: ["dream"],
			categories: ["other", "life"]
		},
		{
			word: "kot",
			translations: ["cat"],
			categories: ["animals"]
		},
		{
			word: "miasto",
			translations: ["city"],
			categories: ["other", "geography", "life"]
		},
		{
			word: "ptak",
			translations: ["bird"],
			categories: ["animals", "nature"]
		},
		{
			word: "gora",
			translations: ["mountain"],
			categories: ["nature"]
		},
		{
			word: "pianino",
			translations: ["piano"],
			categories: ["music", "hobby"]
		},
		{
			word: "gitara",
			translations: ["guitar"],
			categories: ["music", "hobby"]
		}
	]
);