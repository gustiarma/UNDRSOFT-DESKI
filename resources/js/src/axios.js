// axios
import axios from 'axios'

const domain = ""
const token = JSON.parse(localStorage.getItem("userInfo")).api_token
export default axios.create({
  headers: { 'Authorization': `Bearer ${token}` }
  // You can add your headers here
})
