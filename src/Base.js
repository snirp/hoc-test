import React from 'react'
import withStuff from './withStuff'


const Base = ({content, number, double}) => <div>{content} - number:{number} -double:{double} </div>

export default withStuff({argNumber:2})(Base)