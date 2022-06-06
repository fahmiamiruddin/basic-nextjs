import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Nav = () => {
  const classes = useStyles();
  return (  
    <div className={classes.root} style={{marginBottom:'10px'}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href='/'>{process.env.webname}</Link>
          </Typography>
          <Button color="inherit">
            <Link href='/news'>News</Link>
          </Button>
          <Button color="inherit">
            <Link href='/categories'>Categories</Link>
          </Button>
          <Button color="inherit">
            <Link 
              href={{pathname:'/about', query:{name:'fahmi',address:'ngawi'}}}
              as='/about-fahmi'
            >Me</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav