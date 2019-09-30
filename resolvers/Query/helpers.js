module.exports = {
    selectFields(info){
        return info.fieldNodes[0].selectionSet.selections.map(v => v.name.value)
    },
}