import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Search(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const style = {
    backgroundColor: '#C0D6DF',
  };

  const onFirst = function(e) {
    setFirstName(e.target.value);
  }

  const onLast = function(e) {
    setLastName(e.target.value);
  }

  const onSearch = function(e) {
    e.preventDefault();
    const temp = firstName.trim();
    const temp2 = temp.charAt(0).toUpperCase() + temp.slice(1);
    const temp3 = lastName.trim();
    const temp4 = temp3.charAt(0).toUpperCase() + temp3.slice(1)
    props.search(temp2, temp4);
    setFirstName('');
    setLastName('');
  }


  return (
    <div>
      <form onSubmit={onSearch}>
        <TextField variant="outlined" value={firstName} onChange={onFirst} label='First Name' required></TextField>
        <TextField variant="outlined" value={lastName} onChange={onLast} label='Last Name' required></TextField>
        <Button style={style} variant="contained" type='submit'>Search</Button>
      </form>
    </div>
  )
}

export default Search;