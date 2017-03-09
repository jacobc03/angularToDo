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

	// app.get('/api/:id',function(req,res){
	// 	ToDoList.findOne({
	// 		"_id": req.params.id
	//  })
	// 	.populate()
	// })
}