import axios from "axios";

export async function loadFile(path) {
  let data;
  await axios({
    method: "get",
    url: path,
  })
    .then((result) => {
      // console.log(`html: ${result.data}`);
      data = result.data;
    })
    .catch((error) => {
      console.error(`error getting file : ${error}`);
    });
  return data;
}
