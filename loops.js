for (let i = 0; i < 10; i++){
    console.log(i);
}

console.log('Whatever is next');

for (let i = 0; i <= 20; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

let names = ['Sam', 'Tom', 'Hillary'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let a = 110

while (a < 10) {
    console.log(a);
    a++;
}

do {
    console.log(a)
} while (a < 10)

for (i in names) {
    console.log(i);
}

for (name of names) {
    console.log(name);
}
git init
