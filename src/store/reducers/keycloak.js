
const initialState = {}

/**
 * @param state
 * @param {{ type: string; payload: any; }}action
 */
export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}