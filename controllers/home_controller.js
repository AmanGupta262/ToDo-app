const Task = require('../models/task');

module.exports.home = (req, res) => {

    res.render('home', {title: "ToDo App"});
};