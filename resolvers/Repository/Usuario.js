const db = require('../../config/db')

module.exports = {
    query(filtro){

        let query =  db.table('usuarios')

        if(filtro.id)
            query = query.where('id', filtro.id)

        if(filtro.email)
            query = query.where('email', 'like', `%${filtro.email}%`)

        return query
    },



}