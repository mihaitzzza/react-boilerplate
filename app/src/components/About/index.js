import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Menu from '../Menu';
import sampleQuery from '../../queries/sample';

const About = () => {
  const { loading, error, data } = useQuery(sampleQuery);

  useEffect(() => {
    document.title = 'About | DCT';
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  const { message } = data;

  return (
    <>
      <Menu />
      <h1 className="text-red-500 my-5">About component</h1>
      <div className="container">
        <div className="row">
          <div className="col-1">Col 1</div>
          <div className="col-1">Col 2</div>
          <div className="col-1">Col 3</div>
          <div className="col-1">Col 4</div>
          <div className="col-1">Col 5</div>
          <div className="col-1">Col 6</div>
          <div className="col-1">Col 7</div>
          <div className="col-1">Col 8</div>
          <div className="col-1">Col 9</div>
          <div className="col-1">Col 10</div>
          <div className="col-1">Col 11</div>
          <div className="col-1">Col 12</div>
        </div>
      </div>
      <p className="mt-5">
        <strong>Fetched from GQL API:</strong> {message}
      </p>
    </>
  );
};

About.displayName = 'About';

export default About;
