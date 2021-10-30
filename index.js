// start

'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

try {
    const root = document.querySelector('#root')
    // root.textContent = "Hello, world!"
    const domContainer = document.querySelector('#root');
    ReactDOM.render(e(LikeButton), domContainer);
    
} catch (error) {
    console.log("Oops!");
}


// end
