import "./styles.scss";
import { initialList } from "./importThis.js";

const buttons = [
  { id: "prev", value: "prev" },
  { id: "next", value: "next" },
];

var listWrapper = document.querySelector("#traverse");
var buttonWrapper = document.querySelector("#buttonWrapper");

// Må se nærmere på denne
const addListItems = () => {
  initialList.map(
    (item, iterator) =>
      (listWrapper.innerHTML +=
        iterator === 0
          ? `<li class='active' data-key='${item}'>${item}</li>`
          : `<li data-key='${item}'>${item}</li>`)
  );
};

const addButtons = () => {
  buttons.map((button) => {
    const { id, value } = button;
    buttonWrapper.innerHTML += `<button type='button' id='${id}'>${value}</button>`;
  });
};

const toggle = (prev, active) => {
  prev.classList.remove("active");
  const listItems = [...document.querySelectorAll("[data-key]")];
  const item = listItems.find((item) => Number(item.dataset.key) === active);
  if (item) {
    item.classList.add("active");
  }
};

const getCurrentActive = () => {
  return document.querySelector(".active");
};

const setNextActive = () => {
  const currentActive = getCurrentActive();
  var nextActive = Number(currentActive?.dataset?.key) + 1;

  const active = nextActive > initialList.length ? 1 : nextActive;
  toggle(currentActive, active);
};

const setPrevActive = () => {
  const currentActive = getCurrentActive();
  var prevActive = Number(currentActive?.dataset?.key) - 1;

  const active = prevActive < 1 ? initialList.length : prevActive;
  toggle(currentActive, active);
};

const traverse = (event) => {
  const { target } = event;
  const targetId = target?.id;

  switch (targetId) {
    case "next":
      setNextActive();
      break;
    case "prev":
      setPrevActive();
      break;
    default:
      break;
  }
};


const addClickEvents = (handler = traverse) => {
  const buttons = document.querySelectorAll("button");
  const buttonsAsArray = [...buttons];
  for (const button of buttonsAsArray) {
      button.addEventListener("click", handler);
  }
}

addListItems();
addButtons();
addClickEvents(traverse);
