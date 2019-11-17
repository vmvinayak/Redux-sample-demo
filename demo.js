

const ActionTypes = {
    ADD: 'add',
    AUTHOR: 'author'
}




let taskId = 0;
let authorId = 0;

const addAction = (task) => {
    return {
        type: ActionTypes.ADD,
        taskId: taskId++,
        task,
        isCompleted: false
    }
}


const authorAction = (authorName, role) => {
    return {
        type: ActionTypes.AUTHOR,
        authorId: authorId++,
        authorName,
        role
    }
}


const addTodoReducer = (state = [], action) => {
    let nextState = [];

    switch (action.type) {
        case ActionTypes.ADD:
            nextState = [
                ...state,
                {
                    taskId: action.taskId,
                    task: action.task,
                    isCompleted: action.isCompleted
                }];
            break;

        default: nextState = state;
    }
    return nextState;
}


const authorReducer = (state = [], action) => {
    let nextState = [];

    switch (action.type) {
        case ActionTypes.AUTHOR:
            nextState = [
                ...state,
                {
                    name: action.authorName,
                    authorId: action.authorId,
                    role: action.role

                }
            ];
            break;
            default: nextState = state;
    }
    return nextState;
}

let {createStore} = Redux;
let combinedReducers = (state = [], action)=>{
    return {
        add:addTodoReducer(state.add, action),
        author: authorReducer(state.author, action)
    }

}

let store = createStore(combinedReducers, {});

const render = () =>{
    console.log('Rendering......');
    console.log(store.getState());
}


store.subscribe(render);

render();

document.getElementById('addBtn').onclick = ()=>{
  return  store.dispatch(addAction('Task 1'));
}

document.getElementById('authorBtn').onclick = ()=>{
    return store.dispatch(authorAction('Naveen', 'Faculty'))
}




































