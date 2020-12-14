import React from "react";
import { Link } from "gatsby";

import Layout from "../layouts/main";
import SEO from "../components/seo";

const IndexPage: React.FC<{}> = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
     <p>Now go build something great.</p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, laudantium eius quam adipisci sint itaque soluta culpa fugiat, unde cum minus quaerat enim quis velit impedit, neque doloremque est numquam!
    <Link to="/page-2/">Go to page 2</Link> <br />z
  </Layout>
);

export default IndexPage;
