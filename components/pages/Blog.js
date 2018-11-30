// export default `<div class="container header" id="blog-header">
// <h1>John's Blog</h1>
// <h3>Just another blog</h3>
// </div>
// <div class="container content-area" id="blog-content-area">
// <div class="blog-post">
// <h2>Hello World</h2>
// <p>It is almost a rite of passage for a developer on their journey of learning a language to create a <span class="highlighted">Hello World</span>
// Application of some kind. This application simply produces the greating 'hello world.' So far, I have created my 'hello world' app in the following languages:</p>
// <ul>
//     <li>C</li>
//     <li>C++</li>
//     <li>Javascript</li>
//     <li>Java</li>
//     <li>HTML</li>
//     <li>Ruby</li>
//     <li>Python</li>
//     <li>Elixir</li>
//     <li>Objective-C</li>
//     <li>Swift</li>
// </ul>
// <p>I look forward to adding more!</p>
// <hr>
// </div>
// <div class="blog-post">
// <h2>Daily Minimum Reps</h2>
// <p>There is a lot of research into the human brain and how we humans learn through a pattern of stress and recovery.
//     While we learn programming it is important to keep this in mind. That brain pain you are experiencing <strong>is good for you!</strong>
//     Try to focus on the following every day:
// </p>
// <ul>
//     <li>Write new code.</li>
//     <li>Update old code.</li>
//     <li>Try new things!</li>
//     <li>Break things.</li>
//     <li>Fix them.</li>
//     <li>Use the command line over your typical file system.</li>
//     <li>PUSH your code.</li>
// </ul>
// <hr>
// </div>
// </div>`

function mapPost(post) {
    return `
    <div class="blog-post">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      </div>
    `;
  }
  
  export default function Blog(state) {
    state.posts.forEach(function(post){console.log(post)})
    return state.posts.map(mapPost).join(""); // this condenses an Array into a String
  }