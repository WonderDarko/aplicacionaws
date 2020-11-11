import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  constructor(private firebaseApi: AngularFireDatabase) { }

  public createClient(client: any){
    return this.firebaseApi.database.ref('clients').push(client);
  }

  public readClient(){
    return this.firebaseApi.list('clients').valueChanges();
  }
}
