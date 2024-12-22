type ProfileProps = {
    name: string;
    age?: number | string;
  };
  
  const Profile: React.FC<ProfileProps> = ({ name, age }) => {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age !== undefined ? age : 'Age not provided'}</p>
      </div>
    );
  };
  

  export default Profile;