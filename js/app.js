const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".profile-name");
const unContainer = document.querySelector(".profile-username");
const reposContainer = document.querySelector(".profile-repos");
const urlContainer = document.querySelector(".profile-url");

const client_id = "Iv1.4d9ece1ea680eeef";

const client_secret = "32b3dcb54a5fa5c28e3ad4a9e0110afc8f889011";

const fetchUsers = async (user) => {
  try {
    const API_URL = await fetch(
      `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`
    );

    const data = await API_URL.json();
    return { data };
    // exact same as return { data: data };
  } catch (err) {
    alert(err);
  }
};

const showData = () => {
  fetchUsers(inputValue.value).then((res) => {
    console.log(res);

    nameContainer.innerHTML = `Name: <span class="profile-value"> ${res.data.name} </span>`;
    console.log(nameContainer.innerHTML);

    unContainer.innerHTML = `Username: <span class="profile-value"> ${res.data.login} </span>`;

    reposContainer.innerHTML = `Repos: <span class="profile-value"> ${res.data.public_repos} </span>`;

    urlContainer.innerHTML = `URL: <span class="profile-value"> ${res.data.html_url} </span>`;
  });
};
searchButton.addEventListener("click", () => {
  showData();
});
