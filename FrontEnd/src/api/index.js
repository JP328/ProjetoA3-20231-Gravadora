import axios from "axios";

const requisition = async (value, type) => {
  switch  (type) {
    case "postUser":
      await axios.post("http://localhost:5000/usuarios", value, {
        headers: {
          'Content-Type': 'application/json',
        }
      })     
      break;
    case "getUsers":
      axios.get("http://localhost:5000/usuarios")      
      break;
    default:
      break;
  }
}

export default requisition;