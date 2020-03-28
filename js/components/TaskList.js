var TaskList = React.createClass({

    render: function () {
    
        var displayTask = (task,index) => <li>{task} <button onClick={() => this.props.delete(index)}>Delete</button> </li>

        return (
            <ul>
                { this.props.items.map(displayTask)  }     
            </ul>
        );

    }
})