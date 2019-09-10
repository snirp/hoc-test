// Second HOC comparable to connect
import React from 'react'

// double the result of the injected function and pass it to the wrapped component
const withExtra = (extraFunction) => (BaseComponent) => ({...passThroughProps}) => {
  const double = 2*extraFunction()
  return <BaseComponent double={double} {...passThroughProps} />
}

export default withExtra