export class Message {
  content:string;
  username:string;
  messageID?:string;
  userId?:string;

  constructor(
    content:string,
    username:string,
    messageID?:string,
    userId?:string
   ) {
    this.content=content;
    this.username=username;
    this.messageID=messageID;
    this.userId=userId;
  }


}