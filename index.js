const jokeContent = document.getElementById("joke");
const btn = document.getElementById("joke-btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit";

let getJoke = () => {
  jokeContent.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      
      jokeContent.textContent = `${item.joke}`;
      jokeContent.classList.add("fade");
      
      if(item.joke ==null){
        jokeContent.textContent = "I had a joke about paper today, but it was tearable.";
      }
      // console.log(item.joke.status);
    });

   
};
btn.addEventListener("click", getJoke);
getJoke();
