import { GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const [user, setUser] = useState(null)

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loginUser = result.user;
                setUser(loginUser);

            })
            .catch(error => {
                console.log("Error", error.massage);
            })
    }
    const handleGoogleSingOut = () => {
        signOut(auth);
        setUser(null)
    }
    const handleGithubSingIn = ()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            const githubUser = result.user;
            console.log(githubUser)
            setUser(githubUser);
        })
        .catch(error=>{
            console.log("error",error)
        })

    }
    const handleTwitterSingIn = ()=>{
        signInWithPopup(auth,twitterProvider)
        .then(result=>{
            const twitterUser = result.user
            setUser(twitterUser);
            console.log(twitterUser);
        })
        .catch(error =>{
            console.log(error.massage);
        })
    }
    return (
        <div className="container mx-auto my-8">
            <div className="">
                {user ?
                    <button className="bg-gray-200 p-2" onClick={handleGoogleSingOut}>Sing Out</button> :
                    <div>
                        <button className="bg-gray-200 p-2 mr-4" onClick={handleGoogleSingIn}>Log in with Google</button>
                        <button className="bg-gray-200 p-2 mr-4" onClick={handleGithubSingIn}>Log in with GitHub</button>
                        <button className="bg-gray-200 p-2" onClick={handleTwitterSingIn}>Log in with Twitter</button>
                    </div>

                }

                {user && <div>
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