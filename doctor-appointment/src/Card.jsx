import React from 'react'

const Card = ({item}) => {
  return (
    <div>
        {item.name}  : {item.speciallist}
    </div>
  )
}

export default Card