Uppercase = document.querySelector("#uppercase")
lowercase = document.querySelector("#lowercase")
copyText = document.querySelector("#copyText")
clearText = document.querySelector("#clearText")
textarea = document.querySelector("#maininput")
messager = document.querySelector("#messager")

uppercase.addEventListener("click", () => {
    
    textarea.value = textarea.value.toUpperCase();
    messager.style.visibility = "visible";
    messager.innerText = "successfully transformed text";
    messager.style.backgroundColor = "green";
   
    if (textarea.value == ""){
        messager.style.backgroundColor = "red";
        messager.innerText = "Please enter text";
    };
   
});


lowercase.addEventListener("click", function() {
   
    textarea.value = textarea.value.toLowerCase();
    messager.style.visibility = "visible";

    messager.innerText = "successfully transformed text";
    if (textarea.value == ""){
        messager.style.backgroundColor = "red";
        messager.innerText = "Please enter text";
    }
   
});
copyText.addEventListener ("click",function copy(){
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    console.log(textarea.value);
    messager.innerText = "successfully copied text";
    messager.style.visibility = "visible";
    messager.style.backgroundColor = " green"
    if (textarea.value == ""){
        messager.style.backgroundColor = "red";
        messager.innerText = "Please enter text";
    }
}
)
clearText.addEventListener("click",function clear(){

if (textarea.value == ""){
    messager.style.backgroundColor = "red";
    messager.innerText = "Please enter text";
messager.style.visibility = "visible";
}else{
    textarea.value = "";
    messager.style.backgroundColor = "green";
    messager.style.visibility = "visible";
    messager.innerText = "successfully cleared text";
}




})

   