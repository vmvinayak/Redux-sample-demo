
let { createStore } = Redux;



// constant for Action Types            step-1
const ActionTypes = {
    addPerson: 'ADD_PERSON',
    addService: 'ADD_SERVICE'
}


// Action Creators   step-2

const getPerson = (person) => {
    return {
        type: ActionTypes.addPerson,
        name: person.name,
        age: person.age,
        address: person.address,
        gender: person.gender
    }
}

const getService = (service) => {
    return {
        type: ActionTypes.addService,
        serviceType: service.serviceType,
        isFullTime: service.isFullTime,
        time: service.time
    }
}


// create reducers  step-3

let personReducer = (state = [], action) => {
    let newState = [];

    switch (action.type) {
        case ActionTypes.addPerson:
            newState = [
                ...state,
                {
                    name: action.name,
                    age: action.age,
                    address: action.address,
                    gender: action.gender
                }
            ];
            break;
        default: newState = state;
    }

    return newState;
}



let serviceReducer = (state = [], action) => {
    let newState = [];

    switch (action.type) {
        case ActionTypes.addService:
            newState = [
                ...state,
                {
                    serviceType: action.serviceType,
                    isFullTime: action.isFullTime,
                    time: action.time
                }
            ];
            break;
        default: newState = state;
    }

    return newState;
}


const combinedReducers = (state = [], action) => {
    return {
        person: personReducer(state.person, action),
        service: serviceReducer(state.service, action)
    }
}


const store = createStore(combinedReducers, {});


let render = () => {
    console.log(store.getState());
}

store.subscribe(render);

render();

let personDetails = {
    name: 'Vinayak',
    age: 29,
    address: 'Bidar',
    gender: 'Male'
}

let serviceDetails = {
    serviceType: 'Electic Repair',
    isFullTime: false,
    time: '2hours'
}

document.getElementById('btnPerson').onclick = () => {
    return store.dispatch(getPerson(personDetails))
};

document.getElementById('btnService').onclick = () => {
    return store.dispatch(getService(serviceDetails));
}














