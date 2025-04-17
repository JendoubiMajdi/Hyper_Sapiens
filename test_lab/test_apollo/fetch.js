// @ts-nocheck
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://flyby-gateway.herokuapp.com/",
  cache: new InMemoryCache(),
});

const log = (x) => {
  let root = document.getElementById("data");
  if (root) {
    root.innerHTML = JSON.stringify(x);
  }
};

const querydata = () => {
  client
    .query({
      query: gql`
        query GetLocations {
          locations {
            id
            name
            description
            photo
          }
        }
      `,
    })
    .then((result) => log(result));
};

window.handleclick = () => {
  document.getElementById("button").style.display = "none";
  document.getElementById("data").style.display = "block";
  querydata();
};
