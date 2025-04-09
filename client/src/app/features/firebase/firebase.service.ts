import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private app = initializeApp(environment.firebase);
  private auth = getAuth(this.app);

  constructor() {
    console.log('Firebase initialized');
  }

  getAuth() {
    return this.auth;
  }

  getApp() {
    return this.app;
  }
}
