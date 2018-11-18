import React from 'react';
import { storiesOf } from '@storybook/react';
import storyPreview from '@util/storyPreview';
import { Route, Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router';

import styled from 'styled-components';

import { Breadcrumb, Heading } from '@components';

import BreadcrumbDocumentation from './Breadcrumb.md';

storiesOf('Components|Navigation', module)
  .addParameters({ jest: ['Breadcrumb'] })
  .add(
    'Breadcrumb',
    storyPreview(BreadcrumbDocumentation, () => {
      const Box = styled.div`
        padding: 10px 15px;
        background-color: ${({ theme }) => theme.background_light};
      `;

      const maskData = {
        category: (prop, field) => {
          const category = field.replace(/(-)/g, ' ');
          return category.charAt(0).toUpperCase() + category.slice(1);
        },
        title: (prop, field) => {
          const title = field.replace(/(-)/g, ' ');
          return title.charAt(0).toUpperCase() + title.slice(1);
        },
      };

      return (
        <MemoryRouter location={{}}>
          <Box>
            <Breadcrumb mask="TV Shows/:category/:title" maskData={maskData} />
            <Route
              path="/"
              exact={true}
              component={() => (
                <div>
                  <Heading>Home</Heading>
                  <Link to="tv-shows">TV Shows</Link>
                </div>
              )}
            />
            <Route
              path="/tv-shows"
              exact={true}
              component={() => (
                <div>
                  <Heading>TV Shows</Heading>
                  <Link to="/tv-shows/action">Action</Link>
                  &nbsp;
                  <Link to="/tv-shows/comedy">Comedy</Link>
                </div>
              )}
            />
            <Route
              path="/tv-shows/:category"
              exact={true}
              component={({ match }) => {
                if (match.params.category === 'action') {
                  return (
                    <div>
                      <Heading>{match.params.category}</Heading>
                      <Link to="/tv-shows/action/game-of-thrones">
                        Game of Thrones
                      </Link>
                    </div>
                  );
                } else if (match.params.category === 'comedy') {
                  return (
                    <div>
                      <Heading>{match.params.category}</Heading>
                      <Link to="/tv-shows/comedy/south-park">South Park</Link>
                    </div>
                  );
                } else {
                  return <div>Not Found</div>;
                }
              }}
            />
            <Route
              path="/tv-shows/:category/:title"
              exact={true}
              component={({ match }) => (
                <div>
                  <Heading>{match.params.title}</Heading>
                  <Link to="/">Home</Link>
                  &nbsp;
                  <Link to={`/tv-shows/${match.params.category}`}>
                    {match.params.category}
                  </Link>
                </div>
              )}
            />
          </Box>
        </MemoryRouter>
      );
    })
  );
