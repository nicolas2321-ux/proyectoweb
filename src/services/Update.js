import { toast } from 'react-toastify';
import { toastOptions} from './create';

const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1/post/update/";

const update = async (id, token, title, description, image) => {

const Success = () =>{
  toast.success("Post Updated Successfully", toastOptions);
};
const Failure = () =>{
  toast.error("Something went wrong", toastOptions);
};

  const response = await fetch(`${BASE_URL}${id}`, {
  method: "PUT",
  "headers": {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    title: title,
    description: description,
    image: image
  })
})
if (response.ok) {
  Success();
  console.log(response)
}
else {
  console.log(response)
  Failure();
}


const data = await response.json();
return data;
}

export default update;

