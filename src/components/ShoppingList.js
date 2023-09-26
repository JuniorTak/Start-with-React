import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList() {
    let cat = []
    plantList.forEach(myFunction)
    function myFunction(item) {
        if(!cat.includes(item.category)) cat.push(item.category)
    }
	return (
        <>
        <ul>{cat.map((cat) => 
            <li key={cat}>{cat}</li>
        )}</ul>
        <ul className='lmj-plant-list'>
            {plantList.map(({id, cover, name, isBestSale, water, light}) => (
                <li key={id}>
                    <PlantItem
                    cover={cover}
                    name={name}
                    water={water}
                    light={light}
                    isBestSale ={isBestSale}
                    />
                </li>
			))}
        </ul>
        </>
    )
}

export default ShoppingList