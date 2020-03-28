var TaskApp = React.createClass({

    getInitialState: function() {
        return {
            tasks: [],
            task: ' '
        }
    },

    delete(index) {
        var tasks = this.state.tasks;
        tasks.splice(index,1);
        this.setState({ tasks });
    },

    onChange: function(e) {
        var task = e.target.value;
        this.setState({ task });
    },

    onSubmit: function(e) {
        e.preventDefault();

        var tasks = this.state.tasks.concat([this.state.task]);
        var task = ' ';

        this.setState({ tasks , task });
    },

    render: function () {
    
        return (
            <div>
                <h1>My Task has {this.state.tasks.length} items</h1>
                <TaskList delete={this.delete} items={this.state.tasks} />

                <form onSubmit={this.onSubmit} >
                    <input onChange={this.onChange} value={this.state.task} />
                    <button>Add Task</button>
                </form>
            </div>
        );

    }
})

React.render(<TaskApp /> , document.body);