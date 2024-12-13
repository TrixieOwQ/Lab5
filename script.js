// Масив 1
document.write("Масив 1:<br>");
let mas1 = [];
for (let i = 0; i < 10; i++) {
    mas1[i] = Math.random();
    document.write(mas1[i] + "<br>");
}

// Масив 2
document.write("Масив 2:<br>");
let mas2 = [];
for (let i = 0; i < 10; i++) {
    mas2[i] = Math.random() * 10;
    document.write(mas2[i] + "<br>");
}

// Масив 3
document.write("Масив 3:<br>");
let mas3 = [];
for (let i = 0; i < 10; i++) {
    mas3[i] = Math.round(Math.random() * 10);
    document.write(mas3[i] + "<br>");
}
