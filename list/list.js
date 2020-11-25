const data = [
  {name: "China", count: "15"},
  {name: "Ukraine", count: "33"},
  {name: "England", count: "35"},
  {name: "France", count: "53"},
  {name: "Turkey", count: "37"},
  {name: "Egypt", count: "39"},
  {name: "Japan", count: "34"},
];

renderList(data);

function renderList(list) {
  const countryWrapper = document.querySelector(".country ul");
  countryWrapper.innerHTML = '';
  list.forEach(item => {
    countryWrapper.innerHTML += (`<li>${item.name} (${item.count}) <b data-name="${item.name}">x</b></li>`)
  });
}

const number = document.querySelector("#button2");
number.addEventListener("click", (event) => {
  const sorted = data.sort(function (a, b) {
    return a.count - b.count;
  });
number.classList.add('activeSort');
letter.classList.remove('activeSort');
  renderList(sorted);
});


const letter = document.querySelector("#button1");
letter.addEventListener("click", (event) => {
  const sorted = data.sort(function(a, b) {
      if(a.name < b.name) {return -1;}
     if(a.name > b.name) {return 1;}
      return 0;
  });
  letter.classList.add('activeSort'); 
  number.classList.remove('activeSort');
  renderList(sorted);

});



const save = document.querySelector("#submit1");
const field1 = document.querySelector("#text1");

const field2 = document.querySelector("#text2");
save.addEventListener("click", (event) => {
  console.log(field1.value);
  if (field1.value === "" || field2.value === "" ){
    return;
  }

  const newItem = {name: field1.value  , count: field2.value};
 
  data.push(newItem);
  const activeButton = document.querySelector(".activeSort");
  if(activeButton){
    activeButton.click();
  }else{
    renderList(data);
  }
});
 
