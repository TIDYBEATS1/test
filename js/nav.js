// js/nav.js
firebase.auth().onAuthStateChanged((user) => {
  const links = document.getElementById("userLinks");
  if (user) {
    links.innerHTML = `
      <a href="account.html">Account</a>
      <a href="#" id="logoutBtn">Logout</a>
    `;

    document.getElementById("logoutBtn").addEventListener("click", (e) => {
      e.preventDefault();
      firebase.auth().signOut();
    });
  } else {
    links.innerHTML = `<a href="login.html">Login</a>`;
  }
});
