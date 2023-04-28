import { gql } from "@apollo/client";

export const QUERY_ALL_USERS = gql`
  query allUsers {
    allUsers {
      name
      email
    }
  }
`;

export const MUTATE_USER = gql`
  mutation newUser($email: String!, $name: String!) {
    signupUser(data: { email: $email, name: $name }) {
      name
      email
    }
  }
`;
