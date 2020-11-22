type User = {
  name: string;
  age: number;
};

function getUser(): User {
  return {
    name: "Petra",
    age: 52,
  };
}

function deleteUser(user: User) {
  console.log("[PH_LOG] user deleted", user); // PH_TODO
}

const patrick = getUser();
deleteUser(patrick);

const result = null;
export default result;
