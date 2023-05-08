import axios from "axios";

function requisition(value, type) {
  switch (type) {
    case "postUser":
      axios.post("http://localhost:5000/usuarios", value)      
      break;
    case "getUsers":
      axios.get("http://localhost:5000/usuarios")      
      break;
    default:
      break;
  }
}

export default requisition;