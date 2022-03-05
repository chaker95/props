import "./App.css";
import Profile from "./profile/profile";
function App() {
    const alertMyInput = (name) => alert(name);
    return (
        <>
            <Profile
                fullName="Chaker Amri"
                alertMyInput={alertMyInput}
                Bio="student at Gomycode"
                Profession="full stack dev"
            >
                <img src="./profile.jpg" alt="profile_image" style={{width:"200px",height:"150px",borderRadius:"50px"}}/>
                
            </Profile>
        </>
    );
}

export default App;
