import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles = {
    formWrapper: {
        width: '66%',
        height: '100vh',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerForm: {
        padding: 100,
        border: '1px solid black',
    }
}

class Form extends Component {
    componentDidMount() {
        this.props.onListChange(this.props.match.params.listId);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.listId !== newProps.match.params.listId) {
            this.props.onListChange(newProps.match.params.listId);
        }
    }

    render() {
        console.log(this.props.title)
        const {title, task} = this.props;
        const {listId} = this.props.match.params;
        return (
            <form style={styles.formWrapper}>
                <div style={styles.innerForm}>
                    <div>List ID: {listId}</div>
                    <div>
                        <label>Title: </label><input type='text' value={title} />
                        <br />
                        <label>Task: </label><input type='text' value={task} />            
                    </div>
                    <div>
                        <input type='submit' value='Update' />
                        <input type='submit' value='Delete' />
                        <input type='submit' value='Add' />
                    </div>            
                </div>
            </form>
        );
    }

}

const mapStateToProps = state => {
    return {
        item: state.list,
        id: state.id,
        title: state.title,
        task: state.task
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onListChange: (id) => dispatch({type: 'CHANGE_LIST', id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);