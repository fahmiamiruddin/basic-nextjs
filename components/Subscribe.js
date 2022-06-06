import React from 'react'
import { useState } from "react"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useMutation } from '@apollo/client'
import { POST_SUBSCRIBE } from '../schema'

const Subscribe = () => {
  const [dataemail, setDataemail] = useState([]);
  const [message, setMessage] = useState([]);
  const [showerror, setShowerror] = useState(false);
  const [showsuccess, setShowsuccess] = useState(false);
  const [dataSubscribe] = useMutation(POST_SUBSCRIBE);
  const subscribeEmail = async () => {
    const responseData = await dataSubscribe({
      variables: {
        email: dataemail
      }
    })

    const { status } = responseData.data.subscribe;
    setMessage(status.message)
    if (status.response == 'Failed') {
      setShowerror(true)
      setShowsuccess(false)
    } else {
      setShowsuccess(true)
      setShowerror(false)
    }
  };
  return ( 
    <form noValidate autoComplete="off">
      <p>subscribe untuk mendapatkan info terbaru dari {process.env.webname}</p>
      {showerror && <p style={{color:'red'}}>{message}</p>}
      {showsuccess && <p style={{color:'green'}}>{message}</p>}
      <TextField id="standard-basic" label="Email" type="email"
        value={dataemail}
        onChange={(e) => setDataemail(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={subscribeEmail}>Subscribe</Button>
    </form>
  )
}

export default Subscribe