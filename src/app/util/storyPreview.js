import styled from 'styled-components';
import { withDocs } from 'storybook-readme';

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
      theme.name === 'Dark' ? 'rgb(23, 26, 31)' : 'rgb(255, 255 ,255)'};
  `,
});
