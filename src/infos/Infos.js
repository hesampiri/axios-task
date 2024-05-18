import * as React from 'react';

export default function infos({info}) {
  return(
      <>
    <div className='bg-gray-200 p-4 mt-5 mx-2 border-2 border-black'>
        <h1 className='text-lg font-bold text-red-500' >post</h1>
        <h1 className='font-bold text-lg'>ID :</h1>
        <p>{info.id ? info.id : 'empty'}</p>
        <h1 className='font-bold text-lg'>Title: </h1>
        <p>{info.title ? info.title : 'empty'}</p>
        <h1 className='font-bold text-lg'>Body:</h1>
        <p>{info.body ? info.body : 'empty'}</p>
    </div>
      </>
  ) 
}
