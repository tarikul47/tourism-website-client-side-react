import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import initializeAppAuthentication from "../pages/Login/Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
initializeAppAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    const auth = getAuth();
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({});
        <Redirect to="/" />
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else{
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  return {
    user,
    error,
    setError,
    logout,
    signInUsingGoogle,
    isLoading,
    setIsLoading,
    auth
  };
};
export default useFirebase;