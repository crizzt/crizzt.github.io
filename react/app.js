class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			control: [
				{ id: 1, name: 'Damage up', used: false, message: '' },
				{ id: 2, name: 'Armour up', used: true, message: '' },
				{ id: 3, name: 'Restore HP', used: false, message: '' },
				{ id: 4, name: 'Awesome skill -50hp', used: false, message: '' },
				{ id: 5, name: 'Debuff enemy armour', used: true, message: '' },
				{ id: 6, name: 'Debuff enemy damage', used: false, message: '' }
			],

			player: {
				name: 'myPlayer',
				hitpoints: 150,
				currentHp: 150,
				damage: 50
			},

			enemy: {
				name: 'myEnemy',
				hitpoints: 150,
				currentHp: 150,
				damage: 35
			},

			msg: ''
		}

		this.handleAction = this.handleAction.bind(this);
		this.handleBattle = this.handleBattle.bind(this);
	}

	handleAction(evt) {
		if (evt.target.innerHTML === 'Damage up') {
			const updatedPlayer = { ...this.state.player, damage: this.state.player.damage + 20 };
			this.setState({ msg: 'Damage is up', player: updatedPlayer });
		}

		if (evt.target.innerHTML === 'Restore HP') {
			const updatedPlayer = { ...this.state.player, currentHp: this.state.player.currentHp + 50 };
			this.setState({ msg: 'HP has been restored', player: updatedPlayer });
		}

		if (evt.target.innerHTML === 'Awesome skill -50hp') {
			const updatedEnemy = { ...this.state.enemy, currentHp: this.state.enemy.currentHp - 50 };
			this.setState({ msg: 'Hello, this my awesome skill -50 enemy HP', enemy: updatedEnemy });
		}

		if (evt.target.innerHTML === 'Debuff enemy damage') {
			const updatedEnemy = { ...this.state.enemy, damage: this.state.enemy.damage - 20 };
			this.setState({ msg: 'Enemy damage -20', enemy: updatedEnemy });
		}
	}

	handleBattle(evt) {
		const updatedEnemy = { ...this.state.enemy, currentHp: this.state.enemy.currentHp - this.state.player.damage };
		const updatedPlayer = { ...this.state.player, currentHp: this.state.player.currentHp - this.state.enemy.damage };
		if (this.state.enemy.currentHp <= 0) {
			this.setState({ msg: 'Enemy has been defeated' });
		}
		this.setState({ player: updatedPlayer, enemy: updatedEnemy });
	}

	render() {
		return (
			<div className='container'>
				<Game player={this.state.player}
					enemy={this.state.enemy}
					handleAction={this.handleAction}
					handleBattle={this.handleBattle}
					control={this.state.control}
					msg={this.state.msg} />
			</div>
		);
	}
}

const Game = (props) => {
	return (
		<div>
			<Control handleAction={props.handleAction} control={props.control} />
			<div className='row'>
				<Player player={props.player} />
				<Panel msg={props.msg} handleBattle={props.handleBattle} />
				<Enemy enemy={props.enemy} />
			</div>
		</div>
	);
}

const Player = (props) => {
	return (
		<div className='col-xs-4'>
			<div className='well well-sm'>
				Player
      	<div><b>Name:</b> {props.player.name}</div>
				<div><b>Hitpoints:</b> {props.player.currentHp}/{props.player.hitpoints}</div>
				<div><b>Damage:</b> {props.player.damage}</div>
			</div>
		</div>
	);
}

const Panel = (props) => {
	const itemId = generateId();
	return (
		<div className='col-xs-4'>
			<div className='well well-sm'>
				Panel with action's <span>{props.msg}</span>
				<div>
					<button className='btn btn-success' key={itemId} onClick={props.handleBattle}>Go</button>
				</div>
			</div>
		</div>
	);
}

const Control = (props) => {
	return (
		<div className='row'>
			<div className='col-xs-12'>
				<div className='well well-sm'>
					<div className='btn-group btn-group-sm'>
						<button className='btn'><b>Control Panel:</b></button>
						{
							props.control.map((item) => {
								if (item.used === true) {
									return (<button className='btn btn-primary'
										key={item.id}
										disabled='disabled'
										onClick={props.handleAction}>
										{item.name}
									</button>
									)
								} else {
									return (<button className='btn btn-primary'
										key={item.id}
										onClick={props.handleAction}>
										{item.name}
									</button>
									)
								}
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
}

const Enemy = (props) => {
	return (
		<div className='col-xs-4'>
			<div className='well well-sm'>
				Enemy
      	<div><b>Name:</b> {props.enemy.name}</div>
				<div><b>Hitpoints:</b> {props.enemy.currentHp}/{props.enemy.hitpoints}</div>
				<div><b>Damage:</b> {props.enemy.damage}</div>
			</div>
		</div>
	);
}


//Utils func
const generateId = () => Math.floor(Math.random() * 100000);
const toggleControl = (control) => ({ ...control, used: !control.used })
const addItem = (list, item) => [...list, item];

ReactDOM.render(
	<App />,
	document.getElementById('root')
);