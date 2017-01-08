import * as ExampleActions from 'actions/Example'

let initialState = {
    tally: 0
}

function Example(state = initialState, action) {
    switch (action.type) {
        case ExampleActions.INCREMENT:
            return {
                ...state,
                tally: state.tally + 1
            }
        default:
            return state
    }
}

export default Example