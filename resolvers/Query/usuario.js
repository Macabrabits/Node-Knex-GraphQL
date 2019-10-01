const db = require('../../config/db')
const {selectFields} = require('./helpers')
const {query} = require('../Repository/Usuario')

module.exports = {
    async usuarios(_, { filtro }, context, info) {

        const response = await query(filtro)
            .select(selectFields(info))
            .limit(50)
            .then(res => res)
            .catch(error => error.sqlMessage)

        return response

    },
    async usuario(_, { filtro }, context, info) {
        const response = await query(filtro)
            .select(selectFields(info))
            .first()
            .then(res => res)
            .catch(error => error.sqlMessage)

        return response
    },
}