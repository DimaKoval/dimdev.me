import React from "react";

import { Cube } from "../components/cube/cube";
import Layout from "../layouts/main";

const CubePage = () => {
  return (
    <Layout>
      <h1>Cube example</h1>
      <Cube />
    </Layout>
  );
};

export default CubePage;
