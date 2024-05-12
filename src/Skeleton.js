import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={250} height={60} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
      <Skeleton variant="rounded" width={250} height={60} />
    </Stack>
  );
}
