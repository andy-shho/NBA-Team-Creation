import React, {useState, useEffect} from 'react';

function Search(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

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
        First Name: <input type='text' value={firstName} onChange={onFirst} placeholder='Enter first name' required></input>
        Last Name: <input type='text' value={lastName} onChange={onLast} placeholder='Enter last name' required></input>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Search;