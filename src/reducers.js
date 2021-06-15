export const testReducer = (state={}, actions) => {
    switch(actions.type){
        case "TEST_ACTION":
            return {
                ...state,
                text: actions.text
            }
        default:
            return state;
    }
}