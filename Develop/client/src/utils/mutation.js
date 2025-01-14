import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    
    user {
      _id
      username
      email
    }
    token
  }
}
`

export const SAVE_BOOK = gql`
    mutation saveBook($input: savedBook!) {
    saveBook (input: $input)
        {
            _id
            username
            bookCount
            savedBooks {
                # _id
                bookId
                authors
                image
                link
                title
                description
            }
        }
    }
`



export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId:$bookId) {
            _id
            username
            bookCount
            savedBooks {
                # _id
                bookId
                authors
                image
                link
                title
                description
            }
        }
}
`