import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:8000/api/",
  // baseURL: 'https://dev-api.formationbtp.fr/index.php/api/',
  headers: {
    "Content-type": "application/json"
  }
});
