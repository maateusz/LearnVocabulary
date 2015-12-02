var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();

var mongoose    =   require("mongoose");
mongoose.connect('mongodataModel://localhost:27017/test');

var categorySchema =   mongoose.Schema({
						"name": String,
					});
var dictionarySchema =   mongoose.Schema({
						"name": String,
						"from": String,
						"to": String,
					});
var dictionaryWordSchema =   mongoose.Schema({
						"word": String,
						"translations": [String],
						"categories": [String]
					});
var mongoCategories = mongoose.model("category", categorySchema);
var mongoDictionaries = mongoose.model("dictionary", dictionarySchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get("/",function(req,res){
	console.log("GET request!?!?!?");
	res.json({"error" : false,"message" : "Hello World"});
});

router.route("/categories")
    .get(function(req,res){
        var response = {};
        mongoCategories.find({},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "error"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    })
	.post(function(req, res){
		var dataModel = new mongoCategories();
		var response = {};
		
		dataModel.name = req.body.name;
		
		dataModel.save(function(err){
			if(err){
				response = {"error" : true, "message" : "error"};
			} else {
				response = {"error" : false, "message" : "data added" };
			}
			res.json(response);
		});
	});	
	
router.route("/dictionaries")
    .get(function(req,res){
        var response = {};
		//var dataModel = new mongoDictionaries();
        mongoDictionaries.find({},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "error"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    })
	.post(function(req, res){	
		var dataModel = new mongoDictionaries();
		var response = {};
		
		dataModel.name = req.body.name;
		dataModel.from = req.body.from;
		dataModel.to = req.body.to;
		
		dataModel.save(function(err){
			if(err){
				response = {"error" : true, "message" : "error"};
			} else {
				//var mongoCreateDict = new mongoCategories()(req.body.name);
				response = {"error" : false, "message" : "data added" };
			}
			res.json(response);
		});
	});	

router.route("/dictionaries/from/:from")
    .get(function(req,res){
        var response = {};
		//var dataModel = new mongoDictionaries();
		var from = req.params.from;

        mongoDictionaries.find({ "from" : from},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "error"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    });
	
router.route("/dictionaries/to/:to")
    .get(function(req,res){
        var response = {};
		var to = req.params.to;

        mongoDictionaries.find({ "to" : to},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "error"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    });

router.route("/dictionaries/:from/:to")
    .get(function(req,res){
        var response = {};
		
		var from = req.params.from;
		var to = req.params.to;

        mongoDictionaries.find({ "from" : from, "to" : to},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "error"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    });
	
router.route("/dictionary/:dict")
    .get(function(req,res){
        var response = {};
		
		var name = req.params.dict;
		//var to = req.params.to;

		var mongoDict = mongoose.model(name, dictionaryWordSchema);

        mongoDict.find({},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "error"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    });
	
router.route("/dictionary/category/:dict/:category")
    .get(function(req,res){
        var response = {};
		
		var name = req.params.dict;
		var category = req.params.category;

		var mongoDict = mongoose.model(name, dictionaryWordSchema);

        mongoDict.find({"categories" : category},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "error"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    });
	
router.route("/dictionary/word/new/:dict")
    .post(function(req, res){

		var name = req.params.dict;
		var mongoDict = mongoose.model(name, dictionaryWordSchema);	
		var dataModel = new mongoDict();
		
		var response = {};
		
		dataModel.word = req.body.word;
		dataModel.translations = req.body.translations;
		dataModel.categories = req.body.categories;
		
		dataModel.save(function(err){
			if(err){
				response = {"error" : true, "message" : "error"};
			} else {
				response = {"error" : false, "message" : "data added" };
			}
			res.json(response);
		});
	});	

app.use('/',router);

app.listen(3000);
console.log("Server running...");