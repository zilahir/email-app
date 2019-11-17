import React from 'react'
import { Grid, Box } from 'grommet'

const Main = () => (
	<Grid
		rows={['xxsmall', 'large']}
		columns={['flex', 'flex']}
		gap="small"
		areas={[
			{ name: 'header', start: [0, 0], end: [1, 0] },
			{ name: 'sidenav', start: [0, 1], end: [0, 1] },
			{ name: 'emailview', start: [0, 1], end: [0, 1] },
			{ name: 'emailnav', start: [1, 1], end: [1, 1] },
		]}
	>
		<Box gridArea="header" background="brand" />
		<Box gridArea="sidenav" background="yellow" />
		<Box gridArea="emailnav" background="red" />
		<Box gridArea="emailview" background="blue" />
	</Grid>
)

export default Main
