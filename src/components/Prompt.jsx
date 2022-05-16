import { useState } from 'react';
import { TextField } from '@mui/material'

const Prompt = () => {
  return (
    <div>
      <TextField variant='outlined' label='Prompt' multiline='true' minRows='3' sx={{
        minWidth: '400px'
      }} />
    </div>
  );
}

export default Prompt;
