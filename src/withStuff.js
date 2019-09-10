
import React from 'react'
import withExtra from './withExtra'

// add the injected number to the prop number and pass it to the wrapped component 
const withStuff = ({argNumber}) => (BaseComponent) => ({propNumber, ...passThroughProps}) => {
  const sum = argNumber+propNumber

  // this works
  // return <BaseComponent sum={sum} {...passThroughProps} />

  // this does not
  return withExtra(()=>sum)(<BaseComponent sum={sum} {...passThroughProps}/>)
  
}

export default withStuff