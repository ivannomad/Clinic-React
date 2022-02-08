import React, { useState, useEffect } from 'react';
import ResourceService from "../services/ResourceService";

export const BoardDoctor = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    ResourceService().getPatientById().then(
        res => setContent(res.data),
        error => {
          const _content =
              (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
              error.message ||
              error.toString();

          setContent(_content);
        }
    );
  }, []);

  return (
      <div className="container">
        <header className="jumbotron">
          <h3>{content}</h3>
        </header>
      </div>
  );
};