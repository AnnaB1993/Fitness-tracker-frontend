import React, { useState, useEffect } from "react";

import axios from "axios";
const Home = ({ user }) => {
  return user ? (
    <div id="home">Click buttons to change content, {user.username}</div>
  ) : (
    <div id="home">Click buttons to change content</div>
  );
};

export default Home;
