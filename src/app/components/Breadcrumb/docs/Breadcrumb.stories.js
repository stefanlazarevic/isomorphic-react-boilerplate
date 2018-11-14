import React from 'react';
import { storiesOf } from '@storybook/react';
import storyPreview from '@util/storyPreview';
import { Route, Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router';

import styled from 'styled-components';

import { Breadcrumb } from '@components';

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
          return field.replace(/(-_)/g, ' ');
        },
        season_id: 1,
        episode_title: 'Winter is comming',
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
                  <h1>Home</h1>
                  <Link to="tv-shows">TV Shows</Link>
                </div>
              )}
            />
            <Route
              path="/tv-shows"
              exact={true}
              component={() => (
                <div>
                  <h1>TV Shows</h1>
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
                      <h1>{match.params.category}</h1>
                      <Link to="/tv-shows/action/game-of-thrones">
                        Game of Thrones
                      </Link>
                    </div>
                  );
                } else if (match.params.category === 'comedy') {
                  return (
                    <div>
                      <h1>{match.params.category}</h1>
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
                  <h1>{match.params.title}</h1>
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
