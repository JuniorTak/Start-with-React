import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function PlantItem({cover, name, water, light, price, isBestSale}) {
	return (
		<div className='lmj-plant-item' onClick={() => handleClick(name)}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name} {isBestSale ? '🔥' : null}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</div>
	)
}

function handleClick(plantName) {
	console.log('✨ Ceci est un event!')
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

export default PlantItem