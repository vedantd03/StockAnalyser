var stk = JSON.parse(localStorage.getItem("stk")) || [];
localStorage.setItem("stk", JSON.stringify(stk));

function getStock(name) {
    console.log(name);
    if(!stk.includes(name)){
        stk.push(name);
        localStorage.setItem("stk", JSON.stringify(stk));
        console.log(stk);
    }
    window.location.replace('./watchlist.html');
}

function showList() {
    var stk1 = JSON.parse(localStorage.getItem("stk"));
    console.log(stk1);
    var stockList = "";
    stk1.forEach(function(stock) {
        stockList += "<li><a href=./"+ stock + ".html>"+ stock +"</a></li>";
    });
    document.getElementById('stock').innerHTML = stockList;
}

function clr() {
    localStorage.clear();
    location.reload();
}