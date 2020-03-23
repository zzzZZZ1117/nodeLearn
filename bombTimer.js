console.time("bomb");
function explode() {
    setTimeout(function() {
        console.log("bomb!")
    }, 2000)
}
explode()
console.timeEnd("bomb");