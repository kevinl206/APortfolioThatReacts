import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import Navbar from "./components/Navbar";

// import ApolloProvider & boost
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost'

const httpLink = createHttpLink({
    uri: "/graphql",
  });

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("id_token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });


// Components
// import Navbar from "./components/Navbar";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer";

// import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <Navbar />
            <Switch>
              <Route exact path="/" component={SearchBooks} />
              <Route exact path="/saved" component={SavedBooks} />
              <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
            </Switch>
          </>
        </Router>
      </ApolloProvider>
      
    );
  }
  
  
  export default App;