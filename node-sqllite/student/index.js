var express = require('express');
var app = express();
const store = require('../store');

var studentRouter = express.Router();
studentRouter.get('/', function (req, res) {
    store.getStudents().then((req, respond) => {
        students = req;
        res.json(students)
    })
        .catch(function (err) {
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
});
studentRouter.post('/', function (req, res) {
    store.addStudent(req).then(function (id) {
        res.json({
            error: false,
            data: id
        })
    })
        .catch(function (err) {
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
});
studentRouter.get('/:id', function (req, res) { 
    store.getStudent(req).then((req, respond) => {
        students = req;
        res.json(students)
    })
        .catch(function (err) {
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
});
studentRouter.patch('/:id', function (req, res) {
    store.updateStudent(req).then((req, respond) => {
        students = req;
        res.json(students)
    })
        .catch(function (err) {
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
 });
studentRouter.delete('/:id', function (req, res) { 
    store.deleteStudent(req).then((req, respond) => {
        students = req;
        res.json(students)
    })
        .catch(function (err) {
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
});

app.use('/api/student', studentRouter);

module.exports = app;