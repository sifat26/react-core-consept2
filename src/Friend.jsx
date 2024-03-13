export default function Friend({friind}) {
   const { name, email } = friind;
//   console.log(friend.name, friend.email);
  return (
    <div className="box">
      <h4>Name: {name}</h4>

      <p>Email: {email}</p>
    </div>
  );
}
