// "use strict";

let input = document.querySelector(".input");
let answerPage = document.querySelector(".answer");
let searchBox = document.querySelector(".searchBox");
let form = document.querySelector(".form");
let repo = document.querySelector(".repositories");

const func = async function (a) {
  let data = await fetch(`https://api.github.com/users/${a}`);
  let dataJson = await data.json();
  // console.log(dataJson);

  answerPage.innerHTML = `
  <div class="answer--left flex">
    <img src="${dataJson.avatar_url}" alt="">
    <a href="${dataJson.html_url}" class="btn flex">View Profile</a>
  </div>
  <div class="answer--right">
  <div class="answer--right--top flex">
    <div class="repo box1"><p>Public Repos:${dataJson.public_repos}</p></div>
    <div class="gists box1"><p>Public Gists:${dataJson.public_gists}</p></div>
    <div class="follower box1"><p>Followers:${dataJson.followers}</p></div>
    <div class="following box1 "><p>Following:${dataJson.following}</p></div>
  </div>
  <div class="answer--right--bottom">
    <p class="box2">Company:${dataJson.company}</p>
    <p class="box2">Website/Blog:${dataJson.events_url}</p>
    <p class="box2">Location:${dataJson.location}</p>
    <p class="box2">Member since:${dataJson.updated_at}</p>
  </div>
  </div>`;
};

function getRepHtml(a) {
  a.forEach((el) => {
    let html = `<div class="repositories flex">
        

        <div class="latestRepos flex">
          <p class="repoName">${el.name}</p>

          <div class="flex">
            <div class="box1"></div>
            <div class="box1" >Watchers:1</div>
            <div class="box1" >Forks:0</div>
          </div>

        </div>

      </div>
    </div>`;

    answerPage.insertAdjacentHTML("afterend", html);
  });
}

let search = function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    func(input.value);
    getRepos(input.value);

    // answerPage.innerHTML = "";
  });
};

function getRepos(res) {
  fetch(`https://api.github.com/users/${res}/repos`)
    .then((bir) => {
      return bir.json();
    })
    .then((ikki) => {
      console.log(ikki);
      getRepHtml(ikki);
    });
}

search();

// // fetch(https://api.github.com/users/${user}?client_id=65b44d46d520be1f19c7&client_secret=7287ef205413001a79b30f0fbcc04416153ef797);

// let input = document.querySelector(".input");
// let answerPage = document.querySelector(".answer");
// let searchBox = document.querySelector(".searchBox");
// let form = document.querySelector(".form");
// let repo = document.querySelector(".repositories");

// function getUrl(user) {
//   // fetch(
//   //   `https://api.github.com/users/${user}?client_id=8eace0a7f23412d4b735&client_secret=9be5fdeba5f89a420460a33d33106ec61f5b9758)`
//   // )
//   fetch(`https://api.github.com/users/${user}`)
//     .then((one) => {
//       return one.json();
//     })
//     .then((two) => {
//       console.log(two);
//       htmlFile(two);
//       console.log(two);
//     });
// }

// document.addEventListener("keydown", function (e) {
//   if (e.key == "Enter") {
//     getUrl(input.value);
//     input.value = "";
//   }
// });
