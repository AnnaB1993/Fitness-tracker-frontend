export function storeCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

export function getCurrentUser() {
  const ourUser = JSON.parse(localStorage.getItem("currentUser"));
  return ourUser;
}

export function clearCurrentUser() {
  localStorage.removeItem("currentUser");
}
