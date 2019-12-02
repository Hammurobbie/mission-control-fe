import axios from "axios";

const axiosLabsGraphQL = axios.create({
  baseURL: "https://api.use-mission-control.com/",
  // headers: {
  //    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTc0MTAwMDIwLCJleHAiOjE1NzQ3MDQ4MjB9.O_-u_vBXfhBfdP21agD9_rb6iz5NSanjbh3HrDuW4GA" 
  // }
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTc1MzA3NDMzLCJleHAiOjE1NzU5MTIyMzN9.Il4acd3O1awN-0yB4pE1S_B4uay3KNCs92oJTNgjNok"
  }
});

export default axiosLabsGraphQL;
