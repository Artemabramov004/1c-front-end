var filed = document.getElementById("field");

function isPrime(n) {
    for(var i = 2; i < n; ++i) {
        if(n % i == 0) {
            return false;
        }
    }

    return true;
}

filed.addEventListener("keydown", function(event) {
    var number, i; 
    if(event.which == 13) {
        debugger;
        number = Number(field.value);
        alert(isPrime(number) ? "Простое!" : "Составное!");
    }
}); 




