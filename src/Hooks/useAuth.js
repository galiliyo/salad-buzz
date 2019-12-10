import { useState, useEffect } from "react";

const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

export function useAuth() {
  const [authenticated, setAuthenticated] = useState("loading");

  function login() {
    auth.signInWithPopup(provider);
  }

  function logout() {
    auth
      .signOut()
      .then(() => {
        //success
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    auth.onAuthStateChanged(
      function(user) {
        if (user) {
          setAuthenticated(user);
        } else {
          setAuthenticated();
        }
      },
      function(err) {
        console.log(err);
      }
    );
  }, []);

  return { login, logout, loggedIn: authenticated };
}
