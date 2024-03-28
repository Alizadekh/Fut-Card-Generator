const cardlar = document.querySelector(".futcards");

// Add Futcards

let futArr = ["futcard-1.png", "futcard-2.webp", "futcard-3.png"];
for (let fut of futArr) {
  cardlar.innerHTML += `          
    <div class="futcard">
    <img src="./assets/img/${fut}" alt="" />
    </div>`;
}

const cards = document.querySelectorAll(".futcard");
const area = document.querySelector("#mainArea");
// MAKE MAIN FUNCTIONALITIES

cards.forEach((card) => {
  console.log(card);
  card.addEventListener("click", function () {
    const src = this.querySelector("img").getAttribute("src");
    console.log(src);
    area.src = src;
  });
});

let changeBtn = document.querySelector("#change");

let position = document.querySelector("#position");
let positionInput = document.querySelector("#posInput");

let nation = document.querySelector("#nation img");
let nationInput = document.querySelector("#nationInput");

let club = document.querySelector("#club img");
let clubInput = document.querySelector("#clubInput");

let pic = document.querySelector(".pic img");
let picInput = document.querySelector("#photoInput");

let myName = document.querySelector("#name");
let nameInput = document.querySelector("#nameInput");

let pac = document.querySelector("#pac");
let pacInput = document.querySelector("#speedInput");

let sho = document.querySelector("#sho");
let shoInput = document.querySelector("#shootInput");

let pas = document.querySelector("#pas");
let pasInput = document.querySelector("#pasInput");

let dri = document.querySelector("#dri");
let driInput = document.querySelector("#driblInput");

let def = document.querySelector("#def");
let defInput = document.querySelector("#defenceInput");

let phy = document.querySelector("#phy");
let phyInput = document.querySelector("#physicsInput");

let average = document.querySelector("#average");

const makeChange = function () {
  // position
  position.textContent = positionInput.value;

  //   nation
  const nationUrl = URL.createObjectURL(nationInput.files[0]);
  nation.src = nationUrl;

  //   club
  const clubUrl = URL.createObjectURL(clubInput.files[0]);
  club.src = clubUrl;

  //   photo
  const picUrl = URL.createObjectURL(picInput.files[0]);
  pic.src = picUrl;

  //   name
  myName.textContent = nameInput.value;

  //   skills

  pac.textContent = pacInput.value;
  sho.textContent = shoInput.value;
  pas.textContent = pasInput.value;
  dri.textContent = driInput.value;
  def.textContent = defInput.value;
  phy.textContent = phyInput.value;
  average.textContent = Math.floor(
    (parseInt(pacInput.value) +
      parseInt(shoInput.value) +
      parseInt(pasInput.value) +
      parseInt(driInput.value) +
      parseInt(defInput.value) +
      parseInt(phyInput.value)) /
      6
  );
};

changeBtn.addEventListener("click", makeChange);
