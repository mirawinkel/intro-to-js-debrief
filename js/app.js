let myNumber = Math.floor(Math.random() * 100);

if (typeof(myNumber) != "number") {
    console.log('This is not a number');
}
    else if (myNumber % 3 === 0 && myNumber % 5 === 0) {
        console.log('GenBuzz');
}   else if (myNumber % 3 === 0) {
    console.log('Gen');
}   else if (myNumber % 5 === 0) {
    console.log('Buzz');
}   else {
    console.log(myNumber);
}

const item = () => {
    let itemPicker = Math.floor(Math.random() *5);
    if(itemPicker === 0){
        return 'Shoes';
    }
    else if(itemPicker === 1){
        return 'Jeans';
    }
    else if(itemPicker === 2){
        return 'Hat';
    }
    else if(itemPicker ===3){
        return 'Socks';
    } else {
        console.log('Invalid Item')
    }
}

switch(item ()) {
    case 'Shoes':
        console.log('Shoes are $50');
        break;
    case 'Jeans':
        console.log('Jeans are $25');
        break;
    case 'Hat':
        console.log('Hats are $12');
        break;
    case 'Socks':
        console.log('Socks are $2');
}

console.log((Math.round(Math.random() *50)) + 50)

