// $("#searchinp").keypress(function(event) {
//     if (event.which == 13) {
//       search(document.getElementById('searchinp').value);
//     }
// });

// $(document).keypress(function(event){
//     if(event.keyCode == 13){
//         search(document.getElementById('searchinp').value);
//     }
// });

window.onload=function(){
    const inputBar = document.getElementById("searchinp");

    if(inputBar){
        inputBar.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            const userInput = event.target.value;
            console.log(userInput);
            search(userInput);
            event.target.value = "";
        }
        });
    }
}

function search(ln){
    var out = "./"+ln+".html";
    console.log(out);
    location.replace(out);
}