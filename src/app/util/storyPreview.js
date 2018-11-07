import styled from 'styled-components';
import { withDocs } from 'storybook-readme';

export default withDocs({
  PreviewComponent: styled.div`
    padding: 25px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) =>
      theme.name === 'Dark' ? 'rgb(44, 44, 43)' : 'rgb(255, 255 ,255)'};
  `,
});
