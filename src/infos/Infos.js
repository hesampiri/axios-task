import * as React from 'react';
import { styled } from '@mui/material/styles';

export default function infos({info}) {
  return(
      <>
    <div className='bg-gray-200 p-4 mt-5 border-2 border-black'>
        <h1 className='font-bold text-lg'>ID :</h1>
        <p>{info.id}</p>
        <h1 className='font-bold text-lg'>Title: </h1>
        <p>{info.title}</p>
        <h1 className='font-bold text-lg'>Body:</h1>
        <p>{info.body}</p>
    </div>
      </>
  ) 
}
