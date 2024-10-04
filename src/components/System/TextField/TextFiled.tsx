import * as React from 'react';
import Box from '@mui/material/Box';
import {TextField as MainTextField} from '@mui/material';
import { Controller } from 'react-hook-form';

interface IFormInputProps {
  name: string | null | any |undefined;
  control?: any;
  label?: string;
  defaultValue?: string;
  rules?: object;
}


const TextField: React.FC<IFormInputProps> = ( { name, control, label, defaultValue = '', rules = {} }) => {
// let{label}=props;
  return (
    <>
     <Controller
      name={name}
      control={control}
      defaultValue={' '}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <MainTextField
        size='small'
          {...field}
          label={label}
          variant="filled"
          fullWidth
          error={!!error}
          helperText={error ? error.message : ''}
          sx={{
            borderRadius: '12px',
            py:'7px',
            // backgroundColor: '#f5f5f5',
            '& .muirtl-25th7g-MuiInputBase-root-MuiFilledInput-root::after ': {
              borderImage: 'linear-gradient(to right, #3A4750, #BE3144) 1',
            },
            '& .muirtl-11sitr6-MuiInputBase-root-MuiFilledInput-root::after':{
                borderImage: 'linear-gradient(to right, #3A4750, #BE3144) 1',
            }
          }}
        />
      )}
    />

    </>
    // <Box
    //   component="form"
    //   sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
    //   noValidate
    //   autoComplete="off"
      
    // > 
    //   {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    //   <MainTextField 
    // //   {...props}
    //   size='small'
    //   id="filled-basic" 
    //   label={props?.props || ''} 
    //   variant="filled"
    //   sx={{
    //     borderRadius: '12px',
    //     py:'7px',
    //     // backgroundColor: '#f5f5f5',
    //     '& .muirtl-25th7g-MuiInputBase-root-MuiFilledInput-root::after ': {
    //       borderImage: 'linear-gradient(to right, #3A4750, #BE3144) 1',
    //     },
    //     '& .muirtl-11sitr6-MuiInputBase-root-MuiFilledInput-root::after':{
    //         borderImage: 'linear-gradient(to right, #3A4750, #BE3144) 1',
    //     }
    //   }}

    //    {...props} />
    //   {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    // </Box>

    
  );
}
export default TextField
