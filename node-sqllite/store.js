/* 
Knex.js is SQL query builder for SQLITE3 designed to be flexible, portable and fun to use
Document: http://knexjs.org/
*/
const knex = require('knex')(require('./knexfile'))

module.exports = {
    getStudents() {
        return knex('students').select('*')
    },
    getStudent(req) {
        return knex('students').select('*').where("id", req.params.id)
    },
    addStudent(req) {
        return knex('students').insert({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
        })
    },
    updateStudent(req) {
        return knex('students').where("id", req.params.id).update({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
        });
    },
    deleteStudent(req) {
        return knex('students').where("id", req.params.id).del();
    },

}