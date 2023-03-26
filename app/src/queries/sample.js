import { gql } from '@apollo/client';

const sampleQuery = gql`
  query getHello {
    message
  }
`;

export default sampleQuery;
