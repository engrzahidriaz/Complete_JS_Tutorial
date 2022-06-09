// Object inside Array 
// used in real world application

const users = [
    {userID : 01, firstName : 'zahid', gender : 'male'},
    {userID : 02, firstName : 'fasih', gender : 'male'},
    {userID : 03, firstName : 'Fatima', gender : 'female'}
]
console.log(users);

for(let user of users){
    console.log(user);
}

for(let user of users){
    console.log(user.firstName);
}