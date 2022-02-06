import React, {useEffect, useState} from 'react';

import UserService from "../services/UserService";

export const BoardPatient = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
        UserService.getPatientBoard()
            .then(
                res => {
                  setContent(res.data);
                },
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
      <div>
        <header>
          <h3>
            <strong>Profile</strong>
          </h3>
        </header>
        <p>
          <strong>User Info:</strong> {JSON.stringify(content)}
        </p>
      </div>
  );
};