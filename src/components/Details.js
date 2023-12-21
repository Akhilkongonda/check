import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Details() {
  const { register, handleSubmit, setValue } = useForm();
  const [res,setres]=useState(null);

  const onSubmit = async (data) => {
    console.log(data);
  
    try {
      // Use axios to make a POST request with the form data
      const response = await axios.post('https://check-two-bice.vercel.app/Dataapi/insert', data);
  
      console.log('Submission successful:', response.data);
  
      // Assuming result.message is available in the response data
      setres(response.data.message);
     
     
      // Reset the form fields after successful submission
      setValue('name', '');
      setValue('number', '');
    } catch (error) {
      console.error('Error submitting form:', error);
  
      // Handle the error appropriately, e.g., show an error message to the user
    }
  };

 
  
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            type="text"
            {...register('name', { required: true })}
            placeholder="Enter your name"
          />
        </label>
        <br />
        <label>
          Number:
          <input
            type="text"
            {...register('number', { required: true })}
            placeholder="Enter your number"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        {
            <p>{res}</p>
        }
      </form>

      
    </div>
  );
}

export default Details;
