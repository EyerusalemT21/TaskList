let tasks  = localStorage.getItem("tasks");
   
   window.onload = function () { 
    document.getElementById("tasklist").value = tasks;
   };
    
    function addTask(){      
        let task =  document.getElementById("task").value+"\n";
       
        tasks = tasks+ task;
    
        document.getElementById("tasklist").value = tasks;
        document.getElementById("task").value= "";
        localStorage.setItem("tasks", tasks);     
    }
    function clearTask(){
       // localStorage.setItem("tasks","");
        document.getElementById("tasklist").value = "";
        localStorage.removeItem("tasks");
    }
    const add = document.getElementById("addbtn");
    const clear = document.getElementById("clear");

    add.onclick=addTask;
    clear.onclick=clearTask;
