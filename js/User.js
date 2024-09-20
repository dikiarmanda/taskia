// file ini digunakan untuk mengurus business logic
// file ini digunakan untuk mengelola data seperti create, read, update, delete

class User {

  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    return {
      success: true,
    }
  }

  signInUser(usernameByInput) {

    const userExists = this.users.some(user => user.username.toLowerCase() === usernameByInput.toLowerCase());

    if (userExists) {
      return {
        success: true,
        username: usernameByInput,
      }
    } else {
      return {
        success: false,
        message: "User not found",
      }
    }


  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}