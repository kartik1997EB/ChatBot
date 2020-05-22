import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

 
  readonly token = environment.dialogflow.angularBot;

  readonly client = new ApiAiClient({ accessToken: this.token });
  constructor() { 
    
  }
 
 talk(msg):any{
  return this.client.textRequest(msg);
 }

}
