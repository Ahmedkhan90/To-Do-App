var list = document.getElementById("list");
function addTodo() {
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    list.appendChild(li)
    li.appendChild(liText)
    todo_item.value = ""


    // Creat Delet Button//

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("onclick", "deletItem(this)")
    delBtn.appendChild(delText)

    //Creat Edit Button//
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)



    li.appendChild(delBtn)
    // console.log(li)
}

function deletItem(e) {
    e.parentNode.remove()
}
function editItem(e) {
    // console.log(e)
    var val = prompt("Enter Updated Value", e.parentNode.firstChild.nodeValue)
    // console.log(e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}
function deleteAll() {
    list.innerHTML = ""
}