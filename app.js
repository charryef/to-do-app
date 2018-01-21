function onReady() {
  const addToDoForm = document.getElementById('submitButton');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteToDoText = document.getElementById('deleteToDoText');

  addToDoForm.addEventListener('click', event => {
    console.log("hello");
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');
    //create a second button input
    let removeButton = document.createElement('input');
    //set the input's type to button
    removeButton.type = "button";
    //name the button
    removeButton.value = "Delete To-Do";
    removeButton.onclick = function(e) {
      deleteTodo(e);
    }
    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);
    //append deleteButton to the li
    newLi.appendChild(removeButton);
    // empty the input
    newToDoText.value = '';
  });

}
function deleteTodo(e){
  console.log(e)
    let li = e.target.parentNode;
      let ul = li.parentNode;
        ul.removeChild(li);
}
window.onload = function () {
  onReady();
};
