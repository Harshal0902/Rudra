window.onload=function(){

    var favicon = document.getElementById("favicon");
    var favIndex = 0;
    setInterval(function(){
        if(favIndex== 0)
        {
            favicon.href="./Assets/favicon1.ico";
        }
        else
        {
            favicon.href="./Assets/favicon.ico";
        }
        favIndex++;
        favIndex %=2;
    },1000);
};
