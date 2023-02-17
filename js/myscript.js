let myArrayEmail = [];
const myArryEl = document.getElementById("myArrayList");
let itemsReady = false;
const generaEl = document.getElementById("genera");

generaEl.addEventListener(
  "click",
  function () {
    myArrayEmail = [];
    myArryEl.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function (risposta) {
          myArrayEmail.push(risposta.data.response);
          if (myArrayEmail.length == 10) {
            for (let y = 0; y < 10; y++) {
              myArryEl.innerHTML += "<li>" + myArrayEmail[y] + "</li>";
            };
          };
        })
    };
  }
);

