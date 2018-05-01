const initialState = {
    // booger: 'gross'
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
    id: '',
    title: '',
    task: ''
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case 'CHANGE_LIST':
            console.log(action.id)
            const listItem = state.list.filter(item => item.id === parseInt(action.id, 10));
            return {
                ...state,
                id: listItem[0].id,
                title: listItem[0].title,
                task: listItem[0].task
            }
    }
    return state
}

export default reducer;