import express from "express";
import bodyparser from "body-parser";



const app = express();
const port = 3000;


let posts = [];

function Post(title,post){
    this.title = title;
    this.post = post;
    this.time = new Date();
    this.timeStamp = this.time.toLocaleString();
}


function addPost(title,post){
    let myPost = new Post(title,post);
    posts.push(myPost);
}


function deletePost(id){
    posts.splice(id,1);
    console.log(id);
}


function editPost(id, header, paragraph){
    posts[id].title = header;
    posts[id].post = paragraph;
    let time = new Date();
    posts[id].timeStamp = time.toLocaleString();
}


app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render("index.ejs",{posts:posts});
    console.log(posts);
});


//creating new post and submitting edited post
app.post("/submit",(req,res)=>{
  const header = req.body.title;
  const paragraph = req.body.post;
    if(header.length>0 && paragraph.length>0){
  if(req.body.index){
      editPost(req.body.index,header,paragraph);
    }
    else{
    addPost(header,paragraph);
}

}
//   res.render("index.ejs",{posts:posts});
  res.redirect("/");
  console.log(posts);
});


// delete post
app.post("/delete",(req,res)=>{
    deletePost(req.body.id);
    // res.render("index.ejs",{posts:posts});
    res.redirect("/");
    console.log(posts);
})


//edit post
app.post("/edit",(req,res)=>{
    const index = req.body.id;
    const header = posts[index].title;
    const paragraph = posts[index].post;
    res.render("edit.ejs",{
        title: header,
        post: paragraph,
        id: index
    })
    console.log(header,paragraph);
})


app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});