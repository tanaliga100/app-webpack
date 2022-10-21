import "./styles/main.scss";
import generateJoke from "./generateJoke";

const jokeBtn = document.querySelector(".btn");
jokeBtn.addEventListener("click", generateJoke);
