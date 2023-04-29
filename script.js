"use strict";

const button = document.getElementById("button");
const audioEl = document.getElementById("audio");

let joke = "";
const getJokes = async () => {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
    );
    const data = await response.json();
    // data.then();
    // console.log(data);
    joke = data.setup ? `${data.setup}...${data.delivery}` : data.joke;
    console.log(joke);
    tellMe(joke);
    // button.disabled = true;
    toogleButton();
  } catch (err) {
    console.error(err);
  }
};
// getJokes();
const toogleButton = () => {
  button.disabled = !button.disabled;
};
const tellMe = (joke) => {
  VoiceRSS.speech({
    key: "652b0c97168a429b851b53b926781dd0",
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
};
button.addEventListener("click", () => {
  getJokes();
});
audioEl.addEventListener("ended", toogleButton);
