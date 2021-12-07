var symbols = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*'];
//
var form = document.getElementById("m1");
//
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var pass2 = document.getElementById('m2').value;
    var pass1 = pass2.split("");
    var num = 0;
    for (var i = 0;i < pass.length;i++) {
      var hi = pass[i];
      for (var i = 0;i < symbols.length;i++) {
        if (symbols[i] == hi) {
          num += i;
        }
      }
    }
    document.getElementById('out').innerHTML = "Trys: "+num;
}