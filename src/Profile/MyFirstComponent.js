const MyFirstComponent = (props) => {
  console.log(props)
    return (
      <>
      <h1>{props.Profile.FullName}</h1>
      <h2>{props.Profile.Bio}</h2>
      <h3>{props.Profile.Profession}</h3>
      {props.children}

      </>
    );
   };
   export default MyFirstComponent;