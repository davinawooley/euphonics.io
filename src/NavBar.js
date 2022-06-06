import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['about', 'load', 'emotions', 'error', 'playlist'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}