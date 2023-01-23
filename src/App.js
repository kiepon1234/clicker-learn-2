import React, { useEffect, useState } from 'react'

const App = () => {
	const [getBalance, setBalance] = useState(0);
	const click = () => {
		setBalance(prev => prev + 1000);
	}
	useEffect(() => {
		setInterval(async() => {
			setBalance(prev => prev + 500);
		}, 1000);
	}, []);
	return (
		<div className="content">
			<div className="balance">
				<div className="coins">{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format((getBalance / 1000).toFixed(3))}</div>
				<div className="click">
					<div className="button" onClick={click}>CLICK</div>
				</div>
			</div>
		</div>
	);
}

export default App;