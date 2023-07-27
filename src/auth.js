import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged  } from "firebase/auth";
import {firebaseApp, auth} from "./firebase";



export async function signupWithEmail(eamil, password){
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        return {user, error : null}
    }catch(error){
        console.log(error, "error while creating user")
        return {user : null, error : error.message}
    } 
}

export async function singnInWithEmail(email,passowrd){
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        return {user, error : null}
    }catch(error){
        console.log(error, "error while signing in");
        return {user : null, error : error.message}
    }

}

export async function signOut(){
    try{
        await signOut(auth)
        return {success : true, error : null}
    }catch(error){
        console.log(error, "error while signing out");
        return {success : false, error : error};
    }

}

export async function userStatus(cb){
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            cb(user, null);
        } else {
            cb(null, "user is not logged in");
        }
      })
}




