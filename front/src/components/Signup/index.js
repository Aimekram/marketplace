import React from 'react';

const Signup = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = new FormData(event.target);
    let body = {};
    data.forEach((value, property) => (body[property] = value));

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
    console.log(requestOptions.body);

    try {
      await fetch(`http://localhost:4000/api/users/signup`, requestOptions);
    } catch (error) {
      console.log(error);
    }

    // clear data
    data = new FormData();
    body = {};
  };

  return (
    <form onSubmit={handleSubmit} method='post'>
      <label>
        Name:
        <input type='text' name='name' />
      </label>
      <label>
        Password:
        <input type='password' name='password' />
      </label>
      <input type='submit' value='wyślij' />
    </form>
  );
};

export default Signup;
