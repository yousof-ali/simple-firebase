import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
    const auth = getAuth(app)
    console.log(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth,provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log("Error",error.massage);
        })
    }
    return (
        <div className="container mx-auto my-8">
            <div className="flex justify-center">
                <button className="bg-gray-200 p-2" onClick={handleGoogleSingIn}>Log in with Google</button>
            </div>
        </div>
    );
};

export default Login;