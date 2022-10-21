import axios from "axios";

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  axios.get("https://icanhazdadjoke.com", config).then((res) => {
    const data = res.data.joke;
    const notice = "Loading...";
    if (data === undefined) {
      document.querySelector(".cards").textContent = notice;
    }
    document.querySelector(".cards").innerHTML = data;
  });
}

export default generateJoke;
