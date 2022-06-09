// Object destructuring
// destructuring the key value as new vaiable

const band = {
    bandName : 'The Jal',
    famousSong : 'Adat',
    year : 2004,
    otherSong : 'Ratain'
}


// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

// const var1 = band.bandName;
// const var2 = band.famousSong;
// console.log(var1, var2);

// Another way of destructuring //

// const {bandName, famousSong} = band;
// console.log(bandName, famousSong);

// const {bandName: var1, famousSong: var2} = band;  // change variable name
// console.log(var1, var2);

// to rest of elements in function in below
const {bandName, famousSong, ...restProps} = band;
console.log(bandName);
console.log(restProps);

