import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.open(to, '_blank');
  }, [to, navigate]);

  return null;
};

export default Redirect;
