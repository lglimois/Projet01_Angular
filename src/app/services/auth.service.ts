export class AuthService {

  isAuth = false;

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 1//2000 //provoque une tempo de n millisecondes
        );
      }
    );
  }

  signOut() {
    this.isAuth = false;
  }
}
