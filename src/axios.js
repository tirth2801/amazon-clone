import axios from "axios";

const instance = axios.create({
  // The API URL (Cloud Function)
  baseURL: "https://us-central1-clone-cbb4c.cloudfunctions.net/api",
  //   "http://localhost:5001/clone-cbb4c/us-central1/api"
});

export default instance;
