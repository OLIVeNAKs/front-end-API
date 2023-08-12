// initializes axios with HTTP base Url and headers.

import axios from "axios";

export default axios.create({
    // connecting to our local db
 baseURL: "http://localhost:9004",
  //baseURL: "http://52.90.135.103:9004/students",
  headers: {
    "Content-type": "application/json"
  }
});
