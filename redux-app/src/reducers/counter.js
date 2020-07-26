

const initialState = {
    counter: 0,
    Name:''
};

const counterRedux = (state=initialState,action)=>{
    debugger;
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                counter : state.counter + action.val
            }
        case 'DECREMENT':
            return {state : state -1};
        case 'ADDNAME':
            return {Name : action.val};
        case 'GETDATAS':
            return state;
           default : return state;

    }
    
};
export default counterRedux;