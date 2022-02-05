import React, { useState, useEffect } from 'react';

import UserService from "../services/UserService";

export const BoardPatient = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    UserService.getPatientBoard()
        .then(
            res => { setContent(res.data); },
            error => {
              const _content = (
                  error.response &&
                  error.response.data &&
                  error.response.data.message) ||
              error.message ||
              error.toString();

              setContent(_content);
            }
        );
    }, []
  );

  return (
      <div className="container">
        <header className="jumbotron">
          <h3>{content}</h3>
        </header>
      </div>
  );
};