import React from "react";
import Banner from "../Banner/Banner";
import AllData from "../AllData/AllData";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Gadget HEaven</title>
        <meta name="description" content="Welcome to the best gadgets store with the latest products!" />
        <link rel="icon" href="/gadgets.png" type="image/png"></link>
      </Helmet>
      <Banner />
      <AllData />
    </div>
  );
};

export default Home;
