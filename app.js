function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  let id = 0;

  function createNewToDo() {
    if(!newToDoText.value) { return; }
    let prevToDos = JSON.parse(localStorage.getItem("toDos"));
    prevToDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++,
    });
    id ++;
    newToDoText.value = '';

    localStorage.setItem("toDos", JSON.stringify(prevToDos));
    renderTheUI();
  }

  function deleteToDo(e) {
    let tempToDos = JSON.parse(localStorage.getItem("toDos"));

      localStorage.setItem("toDos", "");
      tempToDos = tempToDos.filter(item => item.id !== e);

      localStorage.setItem("toDos", JSON.stringify(tempToDos));
  }


  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';
    let tempToDos = JSON.parse(localStorage.getItem("toDos"));
    tempToDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.value = toDo.complete;
      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      const title = document.createElement('span');
      title.textContent = toDo.title;

      const deleteToDoButton = document.createElement ('input');
      deleteToDoButton.type="button";
      deleteToDoButton.value="Delete To-Do!";
      deleteToDoButton.onclick=function(e) {


        deleteToDo(toDo.id);
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
