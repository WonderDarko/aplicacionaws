import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { FirebaseApiService } from '../firebase-api.service';

@Component({
  selector: 'app-firebase-crud',
  templateUrl: './firebase-crud.component.html',
  styleUrls: ['./firebase-crud.component.css']
})
export class FirebaseCRUDComponent implements OnInit {
  client = new Client(null, null, null, null, null, null, null);
  clients: any[]=[];
  constructor(private firebaseApiService: FirebaseApiService) { }

  ngOnInit(): void {
    this.readClient();
  }

  public createClient(){
    this.client.id += 1;
    this.firebaseApiService.createClient(this.client).then(() => {
      console.log('client inserted');
    }, 
    (err) =>{
      console.log(err);
    }
    );
  }

  public readClient(){
    this.firebaseApiService.readClient().subscribe((res) => {

      console.log(res);
      this.clients=res;
    });
  }

}
