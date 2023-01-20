function sum(a, b) {
    return a + b;
    
}
function dif(a, b) {
    return a - b;
}
function multi(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function cal(a, b, callback) {
    return callback(a, b);
}


console.log(cal(1, 2, div))

setTimeout(() => {
    console.log('Aqui estoy')
}, 2000)


function grettin(name) {
    console.log(`Hola ${name}`);
    
}

function main(name, callback) {
    return callback(name);
}

setTimeout(grettin,1000, 'Julio' )