var posts=["2025/08/25/hello-world/","2025/08/25/index/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };