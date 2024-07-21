import EventEmitter from "events";

class Post extends EventEmitter {
  constructor(autor, text) {
    super();
    this.autor = autor;
    this.text = text;
    this.likesQty = 0;
    this.on("likePost", (username) => {
      console.log(`${username} liked your post!`);
    });
    this.on("error", (error) => {
      console.error(error);
    });
  }
  like(username) {
    if (!username) {
      return this.emit("error", new Error("Username is required!"));
    }
    this.likesQty++;
    this.emit("likePost", username);
  }
}

const myPost = new Post("Bogdan", "My great post!");

// console.log(myPost.autor); // Bogdan
// console.log(myPost.text); // My great post!
// console.log(myPost.likesQty); // 0
myPost.like("Diana");
// console.log(myPost.likesQty); // 1
setTimeout(() => {
  myPost.like();
  // console.log(myPost.likesQty); // 2
}, 1000);

setTimeout(() => {
  myPost.like("Alex");
  // console.log(myPost.likesQty); // 2
}, 2000);
export default Post;
