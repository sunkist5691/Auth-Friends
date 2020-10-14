import axios from "axios";

// ONLY for frontend(client) side authentication,
// NOT for backend side authetication

export const axiosWithAuth = () => {
  //get the token from localStorage
const token = localStorage.getItem('token')
  //create a new 'instance' of axios with the config object built into it
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "http://localhost:5000/"
  })
}