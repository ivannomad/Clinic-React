import React, {useState} from 'react';

export const DoctorProfile = () => {
  const [content, setContent] = useState('');

  return (
      <div className="container">
        <header className="jumbotron">
          <h3>{content}</h3>
        </header>
      </div>
  );
};