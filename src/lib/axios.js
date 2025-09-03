// import axios from "axios";


// const api = axios.create({
//     baseURL: "http://localhost:5001/api"
// })

// export default api


import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://notes-app-backend-plum.vercel.app/api"
    : "http://localhost:5001/api";

const api = axios.create({
  baseURL: baseURL,
});

export default api;
