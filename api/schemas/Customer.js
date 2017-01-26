module.exports = {
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    phone: {
        type: 'string'
    },
    addressLine1: {
        type: 'string'
    },
    addressLine2: {
        type: 'string'
    },
    city: {
        type: 'string'
    },
    state: {
        type: 'string'
    },
    zipcode: {
        type: 'string'
    },
    performance: {
        type: 'array'
    },
    design: {
        type: 'array'
    },
    outdoor: {
        type: 'array'
    }
}