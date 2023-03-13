import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Redir = () => {
  return (
    <div>
    <Button style={{marginRight:'0.5rem'}} as={Link} to='/carrito'>Ir al Carrito</Button>
    <Button style={{marginLeft:'0.5rem'}} as={Link} to='/productos'>Seguir comprando</Button>    
    </div>
  )
}

export default Redir