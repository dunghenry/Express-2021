const Todo = require("../models/Todos.js");
let getAllTodos = async (req, res, next) => {
  Todo.find().then((todo) => {
    return res.status(200).json({
      message: "ok",
      data: todo,
    });
  });
};
let searchTodoId = async (req, res, next) => {
  Todo.findById({ _id: req.params.id })
    .then((todo) => {
      return res.status(200).json({
        message: "ok",
        data: todo,
      });
    })
    .catch(next);
};

let postTodo = async (req, res) => {
  console.log(req.body);
  const todo = new Todo({
    title: req.body.title,
    completed: req.body.completed,
  });
  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
let deleteTodo = async (req, res, next) => {
  Todo.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json("Successfully!!!"))
    .catch(next);
};

module.exports = {
  getAllTodos,
  searchTodoId,
  postTodo,
  deleteTodo
};
