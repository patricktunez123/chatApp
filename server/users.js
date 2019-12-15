const users = [];

const addingUser = ({ id, username, chatRoom }) => {
  username = username.trim().toLowerCase();
  chatRoom = chatRoom.trim().toLowerCase();

  const isUserExist = users.find((user) => user.chatRoom === chatRoom && user.username === username);

  if(isUserExist) {
    return { error: 'Username is in use, pls try an other one' };
  }

  const user = { id, username, chatRoom };
  users.push(user);
  
  return  { user }
}

const removingUser = () => {

}

const gettingUser = () => {

}

const gettingUsersFromRoom = () => {

}