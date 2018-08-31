const redux = require('redux');
function main() {
    let store = redux.createStore(rootReducer);

    store.subscribe(() => console.log(store.getState()))
    store.dispatch({ type: 'CHANGED_FILTER', filter: 'hello' });
    store.dispatch({ type: 'ADD_TODO',todos: {text: "list2", completed: false}});
}
function rootReducer(state = {}, action) {
    return {
        todos: todosReduce(state.todos,action),
        newTodo: { text: 'some' },
        filter: filterReduce(state.filter, action)
    };
}
function todosReduce(state ={text: "list1", completed: false}, action) {
    switch(action.type){
        case 'ADD_TODO':
        return state.completed = true;
        default:
        return state;
    }
}
function filterReduce(state = 'showAll', action) {
    switch (action.type) {
        case 'CHANGED_FILTER':
            return action.filter;
        default:
            return state;
    }
}

main();