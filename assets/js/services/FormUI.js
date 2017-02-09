import PhoneNumber from 'components/PhoneNumber'
import IncrementInput from 'components/IncrementInput'
import BooleanInput from 'components/BooleanInput'
import AltDate from 'components/AltDate'

export const Widgets = {
  phoneNumber: PhoneNumber,
  increment: IncrementInput,
  boolean: BooleanInput,
  date: AltDate
}

export const Excluded = new Set([
    'General_1'
])

export const Remove = new Set([
    'uuid'
])

export const Schema = (schema) => {
    let uiSchema = {}
    Object.keys(schema).forEach(function(key){
        if (Remove.has(key)) {
            delete schema[key]
            return
        }
        if (Excluded.has(key)) return
        if (schema[key].type == 'object') {
            if (schema[key].properties) uiSchema[key] = Schema(schema[key].properties)
        } else if (schema[key].type == 'number' || schema[key].type == 'integer') {
            uiSchema[key] = {
                "ui:widget": "increment"
            }
        } else if (schema[key].type == 'boolean') {
            uiSchema[key] = {
                "ui:widget": "boolean"
            }
        } else if (schema[key].format == 'alt-date') {
            uiSchema[key] = {
                "ui:widget": "date"
            }
        }
    })
    return uiSchema;
}



export const GroupSchema = (schema) => {
    let groupSchema = {}
    Object.keys(schema).forEach(function(key){
        let groupKey = key.replace(/_.*/, '')
        if (!groupSchema[groupKey]) {
            groupSchema[groupKey] = {
                type: "object",
                title: groupKey,
                properties: {}
            }
        }
        groupSchema[groupKey]['properties'][key] = schema[key];
    })
    return groupSchema
}