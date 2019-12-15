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

const removingUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) {
    return users.splice(index, 1)[0];
  }
}

const gettingUser = (id) => users.find((user) => user.id === id);

const gettingUsersFromRoom = () => {

}