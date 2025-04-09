import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { FirebaseService } from '../../firebase/firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private firebaseService: FirebaseService) {}

  async register(email: string, password: string) {
    try {
      const auth = this.firebaseService.getAuth();
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('User registered successfully:', result.user);
      return result.user;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      const auth = this.firebaseService.getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('User logged in successfully:', userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async logout() {
    try {
      const auth = this.firebaseService.getAuth();
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Logout failed', error);
      throw error;
    }
  }
}
