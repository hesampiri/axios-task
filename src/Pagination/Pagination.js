import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({paginate}) {

    const changehandler = (e , p)=>{
        paginate(p);
    }
  return (
    <div className='flex justify-center p-3'>
        <Stack spacing={2}>
        <Pagination count={4} size='large' shape="rounded" onChange={changehandler}/>
        </Stack>
    </div>
  );
}
