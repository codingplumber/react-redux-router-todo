import React from 'react';

const styles = {
    headerWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        fontSize: 30,
        border: '1px solid black'
    }
}

const header = () => {
    return <div style={styles.headerWrapper}>To-Do</div>
}

export default header;