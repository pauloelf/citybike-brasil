import axios from "axios"

const api = axios.create({
  baseURL: "https://api.citybik.es",
  headers: {
    "Content-Type": "application/json",
  },
})

export default api
