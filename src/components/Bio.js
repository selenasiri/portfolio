import React, { useState } from 'react';

const Bio = () => {
  const [displayBio, setDisplayBio] = useState(false);

  const toggleDisplayBio = () => {
    console.log('HHHHH');

    setDisplayBio(prev => !prev);
  };

  return (
    <>
      <h1>Hello!</h1>
      <p>My name is Selena.</p>
      <p>I am always looking forward to working on meaningful projects.</p>

      {displayBio ? (
        <div>
          <p>I live in America and code almost every day.</p>
          <p>My favorite languages are JavaScript and React.</p>
          <p>Besides coding, I also love piano and cooking!</p>

          <button onClick={toggleDisplayBio}>Show less</button>
        </div>
      ) : (
        <div>
          <button onClick={toggleDisplayBio}>Read more</button>
        </div>
      )}
    </>
  );
};

export default Bio;
