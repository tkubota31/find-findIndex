//findUserByUsername
const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

  function findUserByUsername(usersArray, username) {
    return usersArray.find(function(user){
      return user.username === username;
    });
  }

function removeUser (arr, str){
    let theIndex = arr.findIndex(function(val){
        return val.str === str;
    })
        if (theIndex === -1) return;

        return arr.splice(theIndex,1)[0];
    }



// function removeUser(usersArray, username) {
//     let foundIndex = usersArray.findIndex(function(user){
//       return user.username === username;
//     })
//     if(foundIndex === -1) return;

//     return usersArray.splice(foundIndex,1)[0];
//   }
