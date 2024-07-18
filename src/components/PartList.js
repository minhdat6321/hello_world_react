import React from 'react'

function PartList({ totalPics, part, path, state, getCharacterPart }) {

  return (
    <div id={`${part}List`}>
      <p>{part}</p>
      <div className='boxLarge'>
        {getCharacterPart(totalPics, part, path, state)
        }
      </div>
    </div>
  )
}

export default PartList
