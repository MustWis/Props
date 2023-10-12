const UserInfo = (props) => {
  const username = props.username;
  const password = props.password;
  const writeUsername = props.writeUsername;
  return (
    <div>
      {username} , {password}
      <button onClick={writeUsername}>Write username</button>
    </div>
  );
};

export default UserInfo;
