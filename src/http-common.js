// initializes axios with HTTP base Url and headers.

import axios from "axios";

export default axios.create({
    // connecting to our local db
 baseURL: "http://localhost:8086",
  //baseURL: "http://52.90.135.103:8086/students",
  headers: {
    "Content-type": "application/json"
  }
});