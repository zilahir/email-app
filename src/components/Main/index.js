import React from 'react'
import { Grid, Box } from 'grommet'
import { Icon } from 'react-icons-kit'
import { feather } from 'react-icons-kit/feather/feather'

import { colors } from '../../theme/colors'
import Button from '../common/Cta'

const Main = () => (
	<Grid
		areas={[
			{ name: 'nav', start: [0, 0], end: [0, 0] },
			{ name: 'main', start: [1, 0], end: [1, 0] },
			{ name: 'side', start: [2, 0], end: [2, 0] },
		]}
		columns={['260px', '440px', 'flex']}
		rows={['100vh']}
		gap="none"
	>
		<Box
			gridArea="nav"
			background={colors.sidebarBg}
			pad="40px 32px"
		>
			<Button
				color={colors.primary}
				label="New message"
				onClick={() => null}
				icon={<Icon size="1.1em" icon={feather} />}
			/>
		</Box>
		<Box gridArea="main" background="brand" />
		<Box gridArea="side" background="brand" />
	</Grid>
)

export default Main
