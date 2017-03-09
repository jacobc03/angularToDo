//Require mongoose
var mongoose = require ("mongoose");
//Create Schema class
var Schema = mongoose.Schema;

//Create ToDoList Schema;
var ToDoListSchema = new Schema({

	toDoItem: {
		type:String
		
	},
	toDoDate:{
		type:Date
		
	},
	completed:{
		type:Boolean,
		default: false
	}

});

//created the ToDoList model with the ToDoListSchema
var ToDoList = mongoose.model('ToDoList', ToDoListSchema);

//Export the model
module.exports = ToDoList;