import { BrowserRouter } from "react-router-dom";
import RouterPage from "./router";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import './App.css'

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  });
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <RouterPage />
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
