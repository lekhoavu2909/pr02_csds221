//React
import React from 'react';

//Materials
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

//Components
import DatePicker from '@mui/lab/DatePicker';

//Export
export default function BasicDatePicker(props) {
  let [date, setDate] = React.useState(props.dataFromParent);
  //Return
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Deadline"
        value={date}
        onChange={(e) => {
          setDate(e);
          props.dataToParent(e);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
