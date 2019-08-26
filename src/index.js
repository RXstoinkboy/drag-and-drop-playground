import "./styles.css";

const lists = document.querySelectorAll(".list");
const items = document.querySelectorAll(".list__item");

let position;

function drop(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData("text");

  if (!e.target.draggable) {
    e.target.appendChild(document.getElementById(id));
  }

  if (e.target.draggable) {
    const movedId = e.dataTransfer.getData("text");
    const movedEl = document.getElementById(movedId);
    e.target.parentNode.insertBefore(movedEl, position);
  }
}

function dragenter(e) {}

function dragleave(e) {}

function dragover(e) {
  e.preventDefault();
}

function dragoverel(e) {
  position = document.getElementById(e.target.id);
  console.log(position);
}

function dragstart(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function dragend(e) {}

lists.forEach(list => {
  list.addEventListener("drop", drop);
  list.addEventListener("dragenter", dragenter);
  list.addEventListener("dragleave", dragleave);
  list.addEventListener("dragover", dragover);
});

items.forEach(item => {
  item.addEventListener("dragstart", dragstart);
  item.addEventListener("dragend", dragend);
  item.addEventListener("dragenter", dragoverel);
});
