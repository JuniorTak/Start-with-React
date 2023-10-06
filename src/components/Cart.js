import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true) // useSate
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	
	// useEffect triggered when values of total or activeCategory change
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`  //alert(`J'aurai ${total}€ à payer 💸`)
	}, [total])

	return isOpen ? (
		<div className='lmj-cart'>
			<button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
			<h2>Panier</h2>
			{cart.map(({ name, price, amount }, index) => (
				<div key={`${name}-${index}`}>
					{name} {price}€ x {amount}
				</div>
			))}

			<h3>Total : {total}€</h3>
            <button onClick={() => updateCart([])}>Vider le panier</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
		</div>
	)
}

export default Cart