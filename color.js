class Color extends React.Component {
    render () {
        return (
            <div>
                <div style={{backgroundColor: this.props.hex}}>
                    <h6>{this.props.hex}</h6>
                    <button type="button" className = {this.props.locked ? 'btn btn-dark' : 'btn btn-outline-dark'} onClick={this.props.onClick}>
                        {this.props.locked ? 'UNLOCK' : 'LOCK' }
                    </button>
                </div>
            </div>
        );
    }
}