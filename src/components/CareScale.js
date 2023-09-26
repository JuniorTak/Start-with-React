import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale(props) {

	// Destructuration en ES6
	const {scaleValue, careType} = props

	const range = [1, 2, 3]

	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={() => careClick(careType, scaleValue)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

function careClick (care, scale) {
	const qty = {
		1: 'peu', 
		2: 'modérement',
		3: 'beaucoup'
	}
	const caring = care === 'light' ? "de lumière" : "d'arrosage"
	alert("Cette plante requiert " + qty[scale] + " " + caring)
}

export default CareScale