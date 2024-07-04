import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const [user,setUser]=useState(null)

    const handleGoogleSingIn = () => {
        signInWithPopup(auth,provider)
        .then(result => {
            const loginUser = result.user;
            setUser(loginUser);
            
        })
        .catch(error => {
            console.log("Error",error.massage);
        })
    }
    const handleGoogleSingOut =()=>{
        signOut(auth);
        setUser(null)
    }
    return (
        <div className="container mx-auto my-8">
            <div className="">
                {user?<button className="bg-gray-200 p-2" onClick={handleGoogleSingOut}>Sing Out</button>:<button className="bg-gray-200 p-2" onClick={handleGoogleSingIn}>Log in with Google</button>}
                
                {user&&<div>
                    <h2>User Name = {user.displayName}</h2>
                    <p>User Email = {user.email}</p>
                    <img src={user.photoURL} alt="user" />
                </div>
                }
            </div>
        </div>
    );
};

export default Login;