document.querySelector("#push").onclick = function(){
    if(document.querySelector("#newtask").value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector("#tasks").innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector("#newtask").value}
            </span>
            <button class="delete">
            </button> 
        </div>
        `;
    }
}

// const Push = document.querySelector('#push');
// const input = document.querySelector('#newtask input');

// Push.onclick = function(){
//     if(input.value.length == 0){
//         alert("huigfviu")
//     }

// }