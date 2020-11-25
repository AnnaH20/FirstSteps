let userName = "";
const clickNames = document.querySelector(".users");
const adminElement = document.querySelector(".adm");
const text = document.querySelectorAll(".editable");
console.log(text);

const users = [{
  username: 'anna',
  count: 0,
}];

let editCounter = 0;
text.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (adminElement.innerText === "notAdmin") {
      alert('Ви не можете редагувати ');
      return;
    }

    if (editCounter >= 3) {
      alert('У вас більше нема спроб!');
      return;
    }

    const result = prompt("Введіть Ваш текст", event.target.innerText);
    console.log(result);


    if (!result) {
      event.target.innerText = event.target.innerText;
    } else {
      event.target.innerText = result;
      event.target.classList.add("wasedited-js");


      const edited = item.parentNode.querySelector(".table");
      edited.classList.add("show-js");

      const adminName = item.parentNode.querySelector(".name");
      adminName.classList.add("show-js");

      const date = new Date();
      const editDate = date.getUTCDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();

      edited.innerText = "дата редагування: " + editDate;
      adminName.innerText = "відредаговано: " + userName;
      adminButton.innerText = "відредаговано: " + userName;

      editCounter++;
    }
  });
});

adminElement.addEventListener("click", (event) => {
  if (!userName) {
    userName = prompt("Введіть ваше імя");
    if (!userName) {
      return;
    }
  } else {
    userName = "";
  }

  const content = document.querySelector(".right");
  content.classList.toggle("adminColor");

  if (adminElement.innerText === 'notAdmin') {
    adminElement.innerText = "Admin";
    const adminNames = document.querySelector(".users");
    console.log(adminNames);

    const p = document.createElement("P");
    p.innerHTML = userName;
    adminNames.append(p);
  } else {
    adminElement.innerText = 'notAdmin';
  };
});

clickNames.addEventListener("click", (event) => {
  let isValid = false;

  while (!isValid) {
    let password = prompt("Введіть пароль");
    if (password.length >= 6) {
      alert("Its correct");
      isValid = true;
    } else {
      alert("Wrong");
    }
  }
});

const adminButton = document.querySelector("#button");
adminButton.addEventListener("click", (event) => {
  if (!userName) return;
  const commentText = prompt("Type your comment");
  if (commentText) {
    const commentBlock = event.target.parentNode.querySelector(".comment");
    commentBlock.innerText = "Comment: " + commentText;
    commentBlock.classList.add('show-js');
  }
});
