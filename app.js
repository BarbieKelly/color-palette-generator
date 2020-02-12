class App extends React.Component {
    constructor(props) {
        super(props);

        let initialState = {
            colors: [
                {hex: "#add8e6", isLocked: false},
                {hex: "#add8e6", isLocked: false},
                {hex: "#add8e6", isLocked: false},
                {hex: "#add8e6", isLocked: false},
                {hex: "#add8e6", isLocked: false}
            ],
            foo: 'bar'
        }

        this.state = initialState
    }

    randomizeClick () {
        let newColors = this.state.colors.map(colorObject => {
            if (!colorObject.isLocked) {
                return {
                    ...colorObject,
                    hex: '#' + Math.floor(Math.random() * 16777215).toString(16)
                }
            } else {
                return colorObject
            }
        })
    
        this.setState({
            colors: newColors
        });
    }

    lockClick(i) {
        let newColors = this.state.colors.map((color, index) => {
            if (i === index) {
                return {
                    ...color,
                    isLocked: !color.isLocked
                }
            } else {
                return color
            }
        })

        this.setState({
            colors: newColors
        });
    }

    render () {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.randomizeClick.bind(this)}>Randomize</button>
                <Color key={0} hex={this.state.colors[0].hex} locked={this.state.colors[0].isLocked} onClick={() => {this.lockClick(0);}} />
                <Color key={1} hex={this.state.colors[1].hex} locked={this.state.colors[1].isLocked} onClick={() => {this.lockClick(1);}}/>
                <Color key={2} hex={this.state.colors[2].hex} locked={this.state.colors[2].isLocked} onClick={() => {this.lockClick(2);}}/>
                <Color key={3} hex={this.state.colors[3].hex} locked={this.state.colors[3].isLocked} onClick={() => {this.lockClick(3);}}/>
                <Color key={4} hex={this.state.colors[4].hex} locked={this.state.colors[4].isLocked} onClick={() => {this.lockClick(4);}}/>
            </div>
        );
    }
}