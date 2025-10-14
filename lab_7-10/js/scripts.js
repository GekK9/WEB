document.getElementById('ex_7_1').onclick = function () {
    let a = prompt('Введите длину ребра куба');
    let fullArea = a ** 2 * 6;
    let faceArea = a ** 2 * 4;
    let volume = a ** 3;

    alert(`Полная площадь: ${fullArea}\nПлощадь грани: ${faceArea}\nОбъем: ${volume}`);
};

document.getElementById('ex_7_2').onclick = function () {
    let result = 1;
    for (var i = 11; i < 20; i += 2) {
        result *= i;
    }
    alert(result);
};

document.getElementById('ex_8_1').onclick = function () {
    let v1 = parseInt(document.getElementById('V1').value);
    let v2 = parseInt(document.getElementById('V2').value);
    let v3 = parseInt(document.getElementById('V3').value);
    let Z = (v1 + v2 + v3) / 3;
    alert(`Z = ${Z}`)
};

document.getElementById('ex_8_2').onclick = function () {
    let text = document.getElementById('text').value.split(' ')
    alert(text[text.length - 1]);
}

