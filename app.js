function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  let id = 0;

  function createNewToDo() {
    if(!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++,
    });
    id ++;
    newToDoText.value = '';
    console.log(toDos);
    renderTheUI();  
  }

  function deleteToDo(e) {
    console.log(e);
    return toDos.filter(item => item.id !== e);
  }


  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      const title = document.createElement('span');
      title.textContent = toDo.title;

      const deleteToDoButton = document.createElement ('input');
      deleteToDoButton.type="button";
      deleteToDoButton.value="Delete To-Do!";
      deleteToDoButton.onclick=function(e) {

        toDos=deleteToDo(toDo.id);
        renderTheUI();
      }
      newLi.appendChild(deleteToDoButton);
    });

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();
}

  //deleteToDoForm.addEventListener('deleteToDo', event => {
    //event.preventDefault();
  //  deleteToDo();
//
  //  renderTheUI;
  //})

window.onload = function() {
  onReady();
};
