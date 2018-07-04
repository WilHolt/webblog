export interface Comments{
  name:any;
  email:any;
  message:any;
  ip:any;
  time:any;
}
export interface Post{
  userId: any;
  id:any;
  title:any;
  body:any;
  category:any;
  comments: Comments;
}
