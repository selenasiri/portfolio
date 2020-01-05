import React, { Component } from 'react';
import project1 from './assets/project1.png';

export class Project extends Component {
  render() {
    const { title, description, link, image } = this.props.project;

    return (
      <div>
        <img src={image} width='100px' /> <br />
        <a href={link} target='_blank'>
          {link}
        </a>
      </div>
    );
  }
}

export default Project;
