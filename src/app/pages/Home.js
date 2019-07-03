import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import { Heading, Collapse } from '@components';

class Home extends Component {
  static propTypes = {};
  static defaultProps = {};

  injectPageMetadata = () => (
    <Helmet>
      <title>Home Page</title>
      <meta
        name="description"
        content="Description of the page less than 150 characters"
      />
    </Helmet>
  );

  componentDidMount() {
    ReactGA.pageview('/');
  }

  render = () => (
    <Fragment>
      {this.injectPageMetadata()}
      <div style={{ textAlign: 'center' }}>
        <img src="static/img/landing-react-logo.png" alt="React Logo" />
        <Heading>Home Page</Heading>
        <Link to="/about">About</Link>
        <br />
        <Link to="/components">Not Found</Link>
        <Collapse>
          <Collapse.Summary>Click me</Collapse.Summary>
          <Collapse.Details>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At modi
              perferendis eligendi necessitatibus et. Quaerat nesciunt voluptas
              repellendus quis voluptates obcaecati reprehenderit maiores a quas
              odio sed, eaque ipsa consequatur.
            </p>
          </Collapse.Details>
        </Collapse>
      </div>
    </Fragment>
  );
}

export default Home;
