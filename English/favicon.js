
window.onload = function() {

    var faviconIndex = 0;
    var favicon = document.getElementById('favicon');
  
    setInterval(function() {
            favicon.href = faviconIndex + ".png";
            faviconIndex++;
            faviconIndex %= 2;
      }, 1000);
  };