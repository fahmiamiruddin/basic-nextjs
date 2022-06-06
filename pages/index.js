import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Main from './../components/Main'

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ height: '100vh' }}>
        <Main />
      </Box>
    </Container>
  )
}
