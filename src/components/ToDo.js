import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const styles = {
    listWrapper: {
        border: '1px solid black',
        padding: 10
    }
}

const toDo = props => {
    const list = props.myList.map(list => {
        return (
            <Link to={`${list.id}`} key={ list.id }>
                <div style={styles.listWrapper}>
                    <p>{list.title}</p>
                    <p>{list.task}</p>
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