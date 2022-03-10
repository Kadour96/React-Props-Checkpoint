import './App.css';
import img1 from './myphoto.jpg'
import MyFirstComponent from './Profile/MyFirstComponent'

  function App() {
    const Profile= {
      FullName: "Nefzi Abdelkader",
      Bio:
        "Full Stack JS",
      Profession:
        "Student",
    }
  return (
    <div className="">

<MyFirstComponent Profile={Profile} >
<img src={img1} />
</MyFirstComponent>
    </div>
  );
}

export default App;
