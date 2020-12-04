//import { API } from "../../Backend";

export const createEnquiry = (data) => {
  return fetch(`http://localhost:8000/api/enquiry`, {
    method: "POST",
    // headers:{
    //   //Accept:"application/json",
    //   //"Content-Type":"application/json"

    //   //"Content-Type":"multipart/form-data"

    // },
    //body:JSON.stringify(data)
    body: data,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
