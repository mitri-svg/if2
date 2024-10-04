let paltar = prompt("Paltar novu secin:")
let olcu = prompt("Olcu razmeri secin:")
let qiymet = +prompt("Qiymeti secin:")
let reng = prompt("Rengi secin:")

if (paltar == "koynek" && olcu == "L" && qiymet < 20 && reng == "Yasil" || reng == "yasil" || olcu == "l" || paltar == "Koynek") {
    document.getElementById("alisVeris").innerHTML ="Almaq olar";
}else{
    document.getElementById("alisVeris").innerHTML ="Almaq olmaz";
}