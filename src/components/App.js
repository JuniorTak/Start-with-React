import { useState } from 'react'
import logo from '../assets/logo.png'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import QuestionForm from './QuestionForm'
import Footer from './Footer'
import '../styles/Layout.css'

function App() {
    const title = 'La maison jungle'
    const [cart, updateCart] = useState([])

    return (
        <>
            <QuestionForm />
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>
            </Banner>
            <div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
            <Footer />
        </>
    )
}

export default App