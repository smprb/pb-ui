const createStore = () => {
    let state = data;
    let listener = () => {}
    let currentReducer = reducers;

    return {
        getState() {
            return state;
        },

        dispatch(action) {
            state = currentReducer(state, action);
            listener();
            return action;
        },

        subscribe(observer) {
            listener = observer;
        }
    }
}

const data = {
    userData: {
        userName: "Murat Slavich",
        userRegion: "Tomsk, Tomsk Oblast, Russian Federation"
    },

    todolist: [
        {id: 1, text: "Text for todo 1"},
        {id: 2, text: "Text for todo 2"}
    ]

}

const reducers = (state, action) => {
    switch (action.type) {
        case 'ADD':
            state.todolist.push({id: 3, text: 'Hola'})
        return state
    }
}

const store = createStore();
console.log('Store created')

export default store;
