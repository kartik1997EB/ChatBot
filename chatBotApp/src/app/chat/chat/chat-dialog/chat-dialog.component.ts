import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';
import { Msg } from '../../msg';


@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  msgs:Msg[]=[];
  msgContaint;
  constructor(private service:ChatService) { }

  sendMsg(){
    console.log("clicked ",this.msgContaint)
    var m1=new Msg();
    m1.containt=this.msgContaint;
    this.msgContaint="";
    m1.owner="user";
    this.msgs.push(m1);
    this.service.talk(m1.containt).then( (res)=>{
  
      var m2=new Msg();
      m2.containt=res.result.fulfillment.speech;
      m2.owner="robot";
      this.msgs.push(m2);
    });
  }

  ngOnInit() {

    // var m1=new Msg();
    // m1.containt="hey";
    // m1.owner="user";
    // var m2=new Msg();
    // m2.containt="hello";
    // m2.owner="robot";
    // this.msgs.push(m1);
    // this.msgs.push(m2);
    // this.sendMsg("");
  }

}
