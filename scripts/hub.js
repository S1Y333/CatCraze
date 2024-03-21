const hubPostsUrl = "https://65fc387314650eb2100bdfec.mockapi.io/hub/posts";

async function getPosts() {
  try {
    const response = await axios.get(hubPostsUrl);
    return response;
  } catch (error) {
    console.error(error);
  }
}

function dynamicTS(commentTimestamp, currentTimestamp) {
  let dynamicTimestamp;

  let commentTime = new Date(commentTimestamp);
  let currentTime = new Date(currentTimestamp);

  const yearsDifference = Math.abs(
    currentTime.getFullYear() - commentTime.getFullYear()
  );
  const monthsDifference = Math.abs(
    currentTime.getMonth() - commentTime.getMonth()
  );
  const daysDifference = Math.abs(
    currentTime.getDate() - commentTime.getDate()
  );
  const hoursDifference = Math.abs(
    currentTime.getHours() - commentTime.getHours()
  );
  const minutesDifference = Math.abs(
    currentTime.getMinutes() - commentTime.getMinutes()
  );
  const secondsDifference = Math.abs(
    currentTime.getSeconds() - commentTime.getSeconds()
  );

  if (yearsDifference < 1) {
    if (monthsDifference < 1) {
      if (daysDifference < 1) {
        if (hoursDifference < 1) {
          if (minutesDifference < 1) {
            dynamicTimestamp = `${secondsDifference} seconds ago`;
          } else {
            dynamicTimestamp = `${minutesDifference} minutes ago`;
          }
        } else {
          dynamicTimestamp = `${hoursDifference} hours ago`;
        }
      } else {
        dynamicTimestamp = `${daysDifference} days ago`;
      }
    } else {
      dynamicTimestamp = `${monthsDifference} months ago`;
    }
  } else {
    dynamicTimestamp = `${yearsDifference} years ago`;
  }

  return dynamicTimestamp;
}

const postsEl = document.getElementById("posts");

function renderAllPosts(posts) {
  for (const iterator of posts) {
    let postBoxEl = document.createElement("div");
    postBoxEl.classList.add("posts__post-box");
    postsEl.appendChild(postBoxEl);

    ////
    let avatarContainerEl = document.createElement("div");
    avatarContainerEl.classList.add("posts__img-container");
    postBoxEl.appendChild(avatarContainerEl);

    let avatarEl = document.createElement("img");
    avatarEl.src = iterator.avatar;
    avatarContainerEl.appendChild(avatarEl);

    let infoBoxEl = document.createElement("div");
    infoBoxEl.classList.add("posts__info-box");
    postBoxEl.appendChild(infoBoxEl);

    //name & post time
    let infoFirstRowEl = document.createElement("div");
    infoFirstRowEl.classList.add("posts__info-first-row");
    infoBoxEl.appendChild(infoFirstRowEl);

    let userNameEl = document.createElement("p");
    let timeStampEl = document.createElement("p");
    userNameEl.innerText = iterator.name;
    timeStampEl.innerText = dynamicTS(iterator.timestamp, new Date());
    userNameEl.classList.add("posts__info-username");
    timeStampEl.classList.add("posts__info-timestamp");
    infoFirstRowEl.appendChild(userNameEl);
    infoFirstRowEl.appendChild(timeStampEl);

    //post content
    let commentEl = document.createElement("p");
    commentEl.innerText = iterator.comment;
    commentEl.classList.add("posts__info-second-row");
    infoBoxEl.appendChild(commentEl);

    //create the info's third row box
    let infoThirdRowEl = document.createElement("div");
    infoThirdRowEl.classList.add("posts__info-third-row");
    infoBoxEl.appendChild(infoThirdRowEl);
    //create third row's elements
    let likeCount = document.createElement("span");
    likeCount.innerText = iterator.likes;
    const likeIcon = document.createElement("img");
    likeIcon.src = "../assets/icons/icon-like.svg";
    likeCount.classList.add("posts__like-count");
    likeIcon.classList.add("posts__icon");
    infoThirdRowEl.appendChild(likeCount);
    infoThirdRowEl.appendChild(likeIcon);

    likeIcon.addEventListener("click", () => {
      bandSiteApi
        .likeComment(iterator.id)
        .then(() => {
          return bandSiteApi.getComments();
        })
        .then((data) => {
          commentsContainerEl.innerHTML = "";
          comments = data.sort((a, b) => b.timestamp - a.timestamp);
          renderAllComments(comments);
        });
    });
  }
}

let posts = [];
getPosts().then((response) => {
  posts = response.data;
  console.log(posts);
  renderAllPosts(posts);
});
