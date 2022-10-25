document.getElementById("submit").onclick  = function() {

    var node = document.createElement(li);
    var text = document.getElementById("add-task").value; 
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list-of-tasks").appendChild(node);
}