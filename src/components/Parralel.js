import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomWords = () => {
  const [noun, setNoun] = useState('');
  const [adjective, setAdjective] = useState('');

  useEffect(() => {
    // Perform parallel GET requests using Axios
    axios.all([
      axios.get('https://random-word-form.herokuapp.com/random/noun'),
      axios.get('https://random-word-form.herokuapp.com/random/adjective')
    ])
    .then(axios.spread((nounRes, adjectiveRes) => {
      // Handle response data
      setNoun(nounRes.data[0]);
      setAdjective(adjectiveRes.data[0]);
    }))
    .catch(error => {
      console.error('Error fetching random words:', error);
    });
  }, []);

  return (
    <div>
      <p>Random noun: {noun}</p>
      <p>Random adjective: {adjective}</p>
    </div>
  );
};

export default RandomWords;
