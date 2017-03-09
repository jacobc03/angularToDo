var ToDoList = require("./../models/ToDoList.js");


module.exports = function(app){
	app.post('/api/newitem', function (req, res){
		console.log(req.body);
	    //get data DB
	    ToDoList.create({
	      toDoItem: req.body.toDoItem,
	      toDoDate: req.body.toDoDate
	    }, function(err, data){
	      if (err) throw err;
	      res.json(200);
	    })
	})

	app.get("/list", function(req, res) {
    // Finds every doc in the Articles array
    ToDoList.find({}, function(error, doc) {
        //Console any errors
        if (error) {
            console.log(error);
        }
        // Sends the data to the browser as a josn if there is no errors
        else {
            res.json(doc);
        }
    });
});
}