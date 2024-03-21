const catImg = document.querySelectorAll(".card-img-cat");
//console.log(catImg);

const getDogUrl = async () => {
  return await axios.get("https://api.thecatapi.com/v1/images/search");
};

const urlGet = () => {
  catImg.forEach(async (item) => {
    const response = await getDogUrl();
    item.setAttribute("src", response.data[0].url);
    //console.log(response);
  });
};
// const url = getDogUrl().url;
urlGet();
//dogImg.setAttribute("src", url);

//joke
const catJoke = document.querySelectorAll(".card-text");

console.log(catJoke);
const getjokeUrl = async () => {
  return await axios.get("https://official-joke-api.appspot.com/random_joke");
};

const jokeUrlGet = () => {
  catJoke.forEach(async (item) => {
    const response = await getjokeUrl();
    item.textContent = response.data.setup + " " + response.data.punchline;
    //console.log(response);
  });
};
// const url = getDogUrl().url;
jokeUrlGet();

const buttonEl = document.querySelectorAll(".card-button");

let realEntries = [];

buttonEl.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.innerText !== "View My PlayDates") {
      item.innerText = "View My PlayDates";
      item.style.backgroundColor = "#add3d6";
      item.style.color = "#323232";

      const cardBody = item.closest(".card-body");

      // Get the card title and subtitle elements within the card body
      const cardTitle = cardBody.querySelector(".card-title").innerText;
      const cardSubtitle = cardBody.querySelector(".card-subtitle").innerText;

      const newEvent = {
        date: cardSubtitle,
        location: cardTitle,
      };
      realEntries = [newEvent, ...realEntries];
      console.log(realEntries);
    } else {
      window.location.href = "../pages/myplaydate.html";
    }
  });
});



export default {realEntries};
//send new event to realEntry array

//commentsEntries = [newComment, ...commentsEntries];
//   await bandsite1.postComment(newComment);

//   renderCommentsEntries();

// Clear all form inputs
// event.target.reset();
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
