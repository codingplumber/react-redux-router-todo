const initialState = {
    list: [
        {
            id: 1,
            title: 'wash car',
            task: 'take car to the car wash'
        },
        {
            id: 2,
            title: 'eat garbage',
            task: 'dig through trash can and find dinner'
        },
        {
            id: 3,
            title: 'take out food',
            task: 'open trash can and put flavorful food in it'
        }
    ],
    title: '',
    task: '',
    redirectTo: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        // changes item displayed in form
        case 'CHANGE_LIST':
            const listItem = state.list.filter(item => item.id === parseInt(action.id, 10));
            return {
                ...state,
                // had to add these ternarys when I added redirectTo
                id: listItem[0] ? listItem[0].id : '',
                title: listItem[0] ? listItem[0].title : '',
                task: listItem[0] ? listItem[0].task : ''
            }
        
        // captures values in input and textarea to store in state
        case 'CAPTURE_INPUT':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        // updates item in list list in state if changes made 
        case 'UPDATE':
            const updatedList = state.list.map(item => {
                if (item.id === parseInt(action.id, 10)) {
                    item.title = state.title;
                    item.task = state.task;
                }
                return item;
            });
            return {
                ...state,
                list: updatedList
            }

        // deletes to-do item from list in state
        case 'DELETE':
            const newList = state.list.filter(item => item.id !== parseInt(action.id, 10));
            return {
                ...state,
                list: newList,
                title: newList[0] ? newList[0].title : '',
                task: newList[0] ? newList[0].task : '',
                redirectTo: newList.length > 0 ? `/${newList[0].id}` : '/1'
            }

        // adds new to-do item to list in state
        case 'ADD':
            let id;
            state.list.length > 0 ? id = state.list[state.list.length - 1].id + 1 : id = 1;
            const newToDo = {id: id, title: state.title, task: state.task};
            return {
                ...state,
                list: state.list.concat(newToDo)
            }

        // case 'REDIRECT':
        //     console.log('here')
        //     return {
        //         ...state,
        //         // redirectTo: null
        //     }

        default: 
            return state
    }
}

export default reducer;