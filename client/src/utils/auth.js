import decode from 'jwt-decode';

class AuthService {
    getProfile() {
      return decode(this.getToken());
    }
  
    loggedIn() {
      const token = this.getToken();
      // If there is a token and it's not expired, return `true`
      return token && !this.isTokenExpired(token) ;
    }

   
  
    isTokenExpired(token) {
      try {
      // Decode the token to get its expiration time that was set by the server
      const decoded = decode(token);
      // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem('id_token');
        return true;
      } else return false;
      // If token hasn't passed its expiration time, return `false`
    
     } catch (err) {
        console.log('expired check failed! Line 42: AuthService.js');
        return false;

    }
  
    }
    getToken() {
      return localStorage.getItem('id_token');
    }
  
    login(idToken) {
      localStorage.setItem('id_token', idToken);
      window.location.assign('/login');
    }
  
    logout() {
      localStorage.removeItem('id_token');
      window.location.reload();
    }
  }
  
  export default new AuthService();
  