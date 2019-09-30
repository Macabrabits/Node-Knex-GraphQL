const db = require('../../config/db')
const {selectFields} = require('./helpers')
const usuarios = require('../Repository/Usuario')

module.exports = {
    async usuarios(_, { filtro }, context, info) {

        let query =  db.table('usuarios')
            .select(selectFields(info))
            .limit(50)

        if(filtro.id)
            query = query.where('id', filtro.id)

        if(filtro.email)
            query = query.where('email', 'like', `%${filtro.email}%`)

        const response = await query
            .then(res => res)
            .catch(error => error.sqlMessage)

        console.log(response)
        return response

    },
    async usuario(_, { filtro }) {
        // implementar
    },
}