function save(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    today = dd + '/' + mm + '/' + yyyy;

    var task = document.getElementById("task").value;
    var deadline = document.getElementById("deadline").value;

    var dd = deadline.slice(8,10);
    var mm = deadline.slice(5,7);
    var yyyy = deadline.slice(0,4);
    deadline = dd + '/' + mm + '/' + yyyy;
    

    

    row = document.createElement("tr");
    row.setAttribute("class","baris")

    var checkboxCol = document.createElement("td"); 
    checkboxCol.setAttribute("class", "checkbox");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("name", "task");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "todo");
    checkboxCol.appendChild(checkbox);
    
    var taskCol = document.createElement("td");
    var taskColText = document.createTextNode(task);
    taskCol.appendChild(taskColText);

    var todayCol = document.createElement("td");
    var todayColText = document.createTextNode(today);
    todayCol.appendChild(todayColText);
    
    var deadlineCol = document.createElement("td");
    var deadlineText = document.createTextNode(deadline);
    deadlineCol.appendChild(deadlineText);

    row.appendChild(checkboxCol)
    row.appendChild(taskCol)
    row.appendChild(todayCol)
    row.appendChild(deadlineCol)

    tabTask.appendChild(row)
   
}


function refresh(){
    baris = document.getElementsByClassName("todo");
    table = document.getElementById("tabTask");
    // console.log(table.children)

    for(var i = 0; i < baris.length; i++){
        // console.log(baris[i].checked)
        // console.log(i)
        if(baris[i].checked){
            console.log(table.children[i+1])
            // table.removeChild(table.childNodes[i])
        }
    }
}
