import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const styles = {
    listWrapper: {
        border: '1px solid black',
        padding: 10,
        overflow: 'hidden'
    },
    bold: {
        fontWeight: 'bold'
    }
}

const toDo = props => {
    const list = props.myList.map(list => {
        return (
            <Link to={`${list.id}`} key={list.id} style={{textDecoration: 'none'}}>
                <div style={styles.listWrapper}>
                    <p><span style={styles.bold}>Title:</span> {list.title}</p>
                    <p><span style={styles.bold}>Task:</span> {list.task}</p>
                </div>
            </Link>
        );
    });

    return <div>{list}</div>;
}

const mapStateToProps = state => {
    return {
        myList: state.list
    }
};

export default connect(mapStateToProps, null)(toDo);