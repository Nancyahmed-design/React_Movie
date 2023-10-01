
import React from 'react'

export default function Profile({userData}) {
    console.log(userData);

  return (
    <div className='w-50 bg-info py-4 my-4 m-auto text-center'>
        <h3>Name:{userData?.frist_name} {userData?.last_name}</h3>
        <h3 className='my-4'>Age:{userData?.age} </h3>
        <h3>Email:{userData?.email}</h3>

    </div>
  )
}
