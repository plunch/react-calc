import React from 'react';

export default
class Marquee extends React.Component {
	constructor(props) {
		super(props);
		this.state = { num: 0 };
	}

	componentDidMount() {
		this.timerId = setInterval(
			() => this.tick(),
			1
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	tick() {
		this.setState((state, props) => ({ num: state.num + 1 }));
	}

	render() {
		return (<div style={{overflow: 'hidden'}}>
			<div style={{position: 'relative', left: this.state.num}}>
			{this.props.children}
			</div>
			</div>
		);
	}
};
