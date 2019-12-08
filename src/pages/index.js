import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Layout from "../components/layout";

const App = () => {
  return (
    <Layout>
      <div>
        <Header headerText="Home Page" />
        <Link to="/about/">About</Link>
        <div>This is the home page.</div>
      </div>
    </Layout>
  );
};

export default App;
