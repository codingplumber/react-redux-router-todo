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
    // loads initial to-do in form input and textarea
    componentDidMount() {
        this.props.onListChange(this.props.match.params.listId);
    }

    // updates to-do in form on route change
    componentWillReceiveProps(newProps) {
        if (this.props.match.params.listId !== newProps.match.params.listId) {
            this.props.onListChange(newProps.match.params.listId);
        }
    }

    // redirects route after deleting a list item
    componentDidUpdate(prevProps) {
        if (this.props.redirectTo !== prevProps.redirectTo) {
            this.props.history.push(this.props.redirectTo)
        }
    }

    // stops form from reloading
    submit(e) {
        e.preventDefault();
    }

    // clears out input and text area on focus
    focus(e) {
        e.target.value = '';
    }

    render() {
        const {title, task, onInputChange, onUpdate, onDelete, onAdd} = this.props,
            {listId} = this.props.match.params;
        return (
            <form style={styles.formWrapper} onSubmit={this.submit}>
                <div style={styles.innerForm}>

                    <div>
                        <label>Title: <input 
                            type='text'
                            name='title' 
                            value={title}
                            onFocus={this.focus}
                            onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                        <br />
                        <label>Task: <textarea 
                            type='text'
                            name='task' 
                            value={task}
                            onFocus={this.focus}
                            onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>           
                    </div>
                    <div>
                        <input type='button' value='Update' onClick={() => onUpdate(listId)} />
                        <input type='button' value='Delete' onClick={() => onDelete(listId)} />
                        <input type='button' value='Add' onClick={onAdd} />
                    </div>            
                </div>
            </form>
        );
    }

}

const mapStateToProps = state => {
    return {
        items: state.list,
        title: state.title,
        task: state.task,
        redirectTo: state.redirectTo
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onListChange: (id) => dispatch({type: 'CHANGE_LIST', id}),
        onInputChange: (name, value) => dispatch({type: 'CAPTURE_INPUT', payload: {name, value}}),
        onUpdate: (id) => dispatch({type: 'UPDATE', id}),
        onDelete: (id) => dispatch({type: 'DELETE', id}),
        onAdd: () => dispatch({type: 'ADD'}),
        // onRedirect: () => dispatch({type: 'REDIRECT'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);