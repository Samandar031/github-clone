"use strict";

let map = new Map([]);

let input = document.querySelector(".input");
let answerPage = document.querySelector(".answer");
let searchBox = document.querySelector(".searchBox");
let form = document.querySelector(".form");
let repo = document.querySelector(".repositories");

input.focus();

const func = async function (a) {
  let data = await fetch(`https://api.github.com/users/${a}`);

  let dataJson = await data.json();
  map = Object.entries(dataJson);
  console.log(dataJson);

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

let search = function () {
  form.addEventListener("input", function (e) {
    e.preventDefault();

    let val = input.value;
    func(val);

    answerPage.innerHTML = "";
  });
};

search();

// fetch(https://api.github.com/users/${user}?client_id=65b44d46d520be1f19c7&client_secret=7287ef205413001a79b30f0fbcc04416153ef797);
