export const phone = (number) => {
    if (!number) return ''
    number = number.toString().replace(/[^\d]/g,'').substring(0,10)
    var reFull = /(\d{3})(\d{3})(\d{1,4})/
    var reHalf = /(\d{3})(\d{1,3})/
    var reStart = /(\d{3})\d+/
    if (reFull.test(number)) return number.replace(reFull, "($1) $2-$3")
    else if (reHalf.test(number)) return number.replace(reHalf, "($1) $2")
    else if (reStart.test(number)) {
        console.log('start passed')
        return number.replace(reStart, "($1)")
    }
    return number
}

export const schema = (schemaObject, client=true) => {
    if (client) {
        Object.keys(schemaObject).forEach(function(schemaKey){
            if (schemaObject[ schemaKey ].columnName) delete schemaObject[ schemaKey ].columnName;
            if (schemaObject[ schemaKey ].type == 'date') {
                schemaObject[ schemaKey ].type = 'string';
                schemaObject[ schemaKey ].format = 'alt-date';
            }
        })
        delete schemaObject.created;
    }
    return schemaObject
}

export const removeRequire = (schemaObject) => {
    Object.keys(schemaObject).forEach(function(schemaKey){
        if (schemaObject[ schemaKey ].required) delete schemaObject[ schemaKey ].required;
    })
    return schemaObject
}

export const flatten = function(groupedSchema){
    var schema = {}
    Object.keys(groupedSchema).forEach(function(key){
        if (typeof groupedSchema[key] == 'object') {
            schema = {
                ...schema,
                ...groupedSchema[key]
            }
        } else {
            schema[key] = groupedSchema[key]
        }
    })
    return schema
}

export const removeKeys = new Set([
    'createdAt',
    'updatedAt',
    'created',
])

export const cleanFormData = function(formData){
    Object.keys(formData).forEach(function(key){
        if (typeof formData[key] == 'undefined') delete formData[key]
        else if (removeKeys.has(key)) delete formData[key]
    })
    return formData
}


export const removePutKeys = new Set([
    'createdAt',
    'updatedAt',
    'created',
    'id',
    'uuid'
])

export const cleanForPut = function(formData){
    Object.keys(formData).forEach(function(key){
        if (typeof formData[key] == 'undefined') delete formData[key]
        else if (removePutKeys.has(key)) delete formData[key]
    })
    return formData
}