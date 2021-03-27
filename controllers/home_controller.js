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

module.exports.delete = (req, res) => {
    Task.deleteMany(
        {
            _id: {
                $in: req.body.task
            }
        },
        (err) => {
            if(err){ console.log("Error in finding task"); return; }
            return res.redirect('back');
        }
    );
}