import React from 'react';

import ToDoItem from './ToDoItem';

const styles = {
    toDoListWrapper: {
        width: '33%',
        border: '1px solid black',
        padding: '50px 30px',
        overflow: 'scroll'
    }
}

const toDoList = () => <div style={styles.toDoListWrapper}><ToDoItem /></div>;

export default toDoList;