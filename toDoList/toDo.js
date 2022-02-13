var ul = document.getElementById("list");
var li;

var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem); // on click to function

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

function addItem() {
  var input = document.getElementById("input");
  var item = input.value;
  ul = document.getElementById("list");
  var textnode = document.createTextNode(item); /// create ul

  if (item === "") {
    return false;
  } else {
    //create li
    li = document.createElement("li");

    //create checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("id", "check"); // check box

    //create label
    var label = document.createElement("label");
    label.setAttribute("for", "item"); // optional

    // add these elements on web page

    ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);

    //timeout
    setTimeout(() => {
      li.className = "visual";
    }, 2);

    input.value = "";
  }
}

function removeItem() {
  li = ul.children; // -> lists all element in ul (array)

  for (let i = 0; i < li.length; i++) {
    //li[index] -> as to check on that part only..
    while (li[i] && li[i].children[0].checked)
      // the element is checked
      ul.removeChild(li[i]);
  }
}
