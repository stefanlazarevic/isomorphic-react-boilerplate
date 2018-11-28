import styled from 'styled-components';
import { withDocs } from 'storybook-readme';
import { LightSwatch, DarkSwatch } from '@design/Color';

export default withDocs({
  PreviewComponent: styled.div`
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    padding: 25px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) =>
      theme.name === 'Dark'
        ? DarkSwatch.background_primary
        : LightSwatch.background_primary};
  `,
});
