import React from 'react'
import { Grid, Box } from 'grommet'

const Main = () => (
	<Grid
		areas={[
			{ name: 'nav', start: [0, 0], end: [0, 0] },
			{ name: 'main', start: [1, 0], end: [1, 0] },
			{ name: 'side', start: [2, 0], end: [2, 0] },
		]}
		columns={['small', 'medium', 'flex']}
		rows={['calc(100vh -  15px)']}
		gap="small"
	>
		<Box gridArea="nav" background="brand" />
		<Box gridArea="main" background="brand" />
		<Box gridArea="side" background="brand" />
	</Grid>
)

export default Main
