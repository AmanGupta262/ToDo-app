const Task = require('../models/task');

module.exports.home = (req, res) => {
    Task.find({}, (err, tasks) => {
        if (err) { console.log("Error in finding tasks"); return; }

        res.render('home', { 
            title: "ToDo App",
            tasks: tasks
        });
    });
};
