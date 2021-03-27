const Task = require('../models/task');

module.exports.home = (req, res) => {


        res.render('home', { 
            title: "ToDo App",
        });
};

module.exports.create = (req, res) => {
    Task.create({
        description: req.body.description,
        dueDate: req.body.date,
        category: req.body.category
    }, (err, task) => {
        if(err){ console.log("Error in creating task"); return; }

        return res.redirect('back');
    });
}

