import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'grommet'

/**
* @author
* @function Cta
* */

const Cta = props => {
	const { label, onClick } = props
	return (
		<>
			<Button
				label={label}
				primary
				onClick={onClick}
			/>
		</>
	)
}

Cta.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default Cta
