import axios from "axios";









export const addCategory = (form) => (
    (dispatch) => (
      axios.post("http://localhost:3001/rutaPost" , form)
      .catch((error) => console.error(error))
    )
  );