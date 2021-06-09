window.onload=function(){

    var favicon = document.getElementById("favicon");
    var favIndex = 0;
    setInterval(function(){
        if(favIndex== 0)
        {
            favicon.href="./Assets/favicon.ico";
        }
        else
        {
            favicon.href="./Assets/1.png";
        }
        favIndex++;
        favIndex %=2;
    },1000);
};