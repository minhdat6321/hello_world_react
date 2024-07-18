import React from 'react'



function AvatarCard({ path, updateState, zIndex }) {
  return (
    <img style={{ zIndex: `${zIndex}` }} src={`${path}/${updateState}.png`} alt="" />
  )
}

export default AvatarCard
