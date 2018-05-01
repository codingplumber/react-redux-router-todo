import React from 'react';

import ToDo from './ToDo';

const styles = {
    toDoListWrapper: {
        width: '33%',
        border: '1px solid black',
        padding: '15px 30px'
    }
}

const toDoList = () => {
    return <div style={styles.toDoListWrapper}><ToDo /></div>;
}

export default toDoList;