import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'grommet'

import { colors } from '../../../theme/colors'

/**
* @author
* @function Cta
* */

const Cta = props => {
	const { label, onClick, icon } = props
	return (
		<>
			<Button
				icon={icon || null}
				label={label}
				primary
				onClick={onClick}
			/>
		</>
	)
}

Cta.defaultProps = {
	icon: colors.primary,
}

Cta.propTypes = {
	icon: PropTypes.node,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default Cta
