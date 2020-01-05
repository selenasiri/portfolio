import React from 'react';

const Project = props => {
  const { title, description, link, image } = props.project;
  return (
    <div>
      <img src={image} width='100px' /> <br />
      <a href={link} target='_blank'>
        {link}
      </a>
    </div>
  );
};

export default Project;
