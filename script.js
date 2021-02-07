testArray = ["1", "2", "3"]

for (var i = 0; i < testArray.length; i++){
    const testCount = $("<h1>");

    testCount.text(testArray[i]);
    $("body").append(testCount);
}


document.getElementById("button").addEventListener("click", test);
function test(){
    console.log("ok, how about now?");
}



function openNav(){
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
}
