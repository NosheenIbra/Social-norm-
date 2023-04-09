let createFeed = (obj) => {
  // https://i.pinimg.com/564x/f4/26/e7/f426e72a9ea322652ddca1e7f9b645ee.jpg
  return `
        <div class="feed">
        <div class="head">
        <div class="user">
        <div class="profile-photo">
             <img src="${obj.profile}">
             </div>
             <div class="ingo">
             <h3>${obj.userName}</h3></h3>
             <small>${obj.details}</small>
             </div>
             </div>
             <span class="edit">
             <i class="fa-solid fa-ellipsis"></i>
             </span>
             </div>
             
             <div class="photo">
             <img src=${obj.post}>
             </div>
             
             <div class="action-button">
             <div class="interaction-button">
             <span><i class="fa-regular fa-heart"></i></span>
             <span><i class="fa-regular fa-comment-dots"></i></span>
             <span><i class="fa-solid fa-share"></i></span>
             </div>
             <div class="bookmark">
             <span><i class="fa-regular fa-bookmark"></i></span>
             </div>
             </div>
             
             <div class="liked-by">
             <span><img src='${obj.likes.img[0]}'></span>
             <span><img src="${obj.likes.img[1]}"></span>
             <span><img src="${obj.likes.img[2]}"></span>
             <p>liked by <b>${obj.likes.name}</b> and <b>${obj.likes.detail}</b></p>
             </div>
             <div class="caption">
             <p><b>${obj.description.name}</b>${obj.description.text} <span class="harsh-tag">${obj.description.harshText}</span></p>
             </div>
             <div class="comment text-muted"> ${obj.viewComments}</div>
             </div>
             `
};

let feeds = document.querySelector(".feeds");
let feedsdata = [
  {
    profile:
      "https://i.pinimg.com/564x/f4/26/e7/f426e72a9ea322652ddca1e7f9b645ee.jpg",
    post: "https://img.freepik.com/free-photo/pretty-girl-touching-her-face_1153-1023.jpg?t=st=1679374717~exp=1679375317~hmac=93a3029ef283d96f891654d602153196b2570506ede9de1b7fed68577f1fa001",
    userName: "shehroz N",
    details: "Pakistan, 15 MINUTES AGO",
    likes:{
      img :[
      
        "https://i.pinimg.com/564x/12/b9/78/12b978dbbb01e2ce57faa6578900260a.jpg",
        "https://i.pinimg.com/564x/f8/ae/25/f8ae251b6fa6ecd74dcc9e5d94fbb3fc.jpg",
        "https://i.pinimg.com/564x/40/e1/34/40e13483631a392607dd0b01fa850927.jpg",
      
          ],
       name:"Sobia khan",
       detail:"2,323 others",

      },
      description:{
        name:"Ibra Nosheen",
        text:"Lorem ipsum dolor sit.",
        harshText:"#lifeStyle",
      },
      viewComments:"view all comments",
  },
  {
    profile:
      "https://i.pinimg.com/564x/da/72/c4/da72c4f89ba943012abcc0bb37dcdf35.jpg",
    post: "https://i.pinimg.com/564x/07/c2/e6/07c2e62d8663d8676fd53fd842358389.jpg",
    userName: "Sana khan",
    details: "Pakistan, 1 MINUTES AGO",
    likes:{
      img :[
      
        "https://i.pinimg.com/564x/52/9f/4d/529f4d0e102855839d4972428573618e.jpg",
        "https://i.pinimg.com/564x/d1/00/1f/d1001fa7c77b4dd47e7315b2a715f927.jpg",
        "https://i.pinimg.com/736x/5a/9b/a4/5a9ba444fbb0be6d8ab9e4a7a033041b.jpg",
      
          ],
       name:"Talha Naeem",
       detail:"2 others",

      },
      description:{
        name:"Hira Nosheen",
        text:"Lorem ipsum dolor sit. ",
        harshText:"#lifeStyle",
      },
      viewComments:"View recent comments",
  },
  {
    profile:
      "https://i.pinimg.com/564x/ec/54/45/ec544539dbf40c573df2dbc5292559ea.jpg",
    post: "https://i.pinimg.com/564x/f9/41/5d/f9415d29c25c7a3b46bbfe91dd46dfb6.jpg",
    userName: "sania sameer",
    details: "Multan, 1 seconds AGO",
    likes:{
      img :[
      
        "https://i.pinimg.com/564x/09/2c/71/092c71af5093fdcf2b09c58c895d4f56.jpg",
        "https://i.pinimg.com/564x/d9/17/1b/d9171b8b4111b49112344834289627a0.jpg",
        "https://i.pinimg.com/736x/01/03/58/01035867b9a33073c0b0509692983c6e.jpg",
      
          ],
       name:"Sana Shuja",
       detail:"232,33 others",

      },
      description:{
        name:"Salman Nawaz",
        text:"Lorem ipsum dolor sit.",
        harshText:"lifeStyle",
      },
      viewComments:"View comments",
  },
  {
    profile:
      "https://i.pinimg.com/564x/fc/62/5a/fc625a1c0cc8c88e529a3503ec26cfa1.jpg",
    post: "https://i.pinimg.com/564x/f9/4d/dc/f94ddcc66b75140554e1b2699735847d.jpg",
    userName: "Sohail Mubeen",
    details: "Gujrat, 5 MINUTES AGO",
    likes:{
      img :[
      
        "https://i.pinimg.com/564x/86/72/59/86725944190b45df3844d562d652a7f1.jpg",
        "https://i.pinimg.com/564x/a5/54/de/a554de2769351cd36ec42f30d2eab62c.jpg",
        "https://i.pinimg.com/564x/b9/04/22/b90422fa2c9182ee108e3f647993bad4.jpg",
      
          ],
       name:"Anam Shuja",
       detail:"123,34 others",

      },
      description:{
        name:"Rubina Naeem",
        text:"Lorem ipsum dolor sit.",
        harshText:"lifeStyle",
      },
      viewComments:"View all comments",
  },
  {
    profile:
      "https://img.freepik.com/free-photo/headshot-optimistic-european-woman-feels-free-delighted_273609-25785.jpg?t=st=1679374730~exp=1679375330~hmac=5494fa5f3a76b7cded0d038b1dbaafdc2f6648419e891f363f1b347f6ebc7181",
    post: "https://i.pinimg.com/564x/e7/1a/64/e71a64be96de8590a04bec279da72645.jpg",
    userName: "Naheed Shahid",
    details: "Muree, 15 MINUTES AGO",
    likes:{
      img :[
      
        "https://i.pinimg.com/564x/c6/e5/cf/c6e5cfdd52e39878895b2cdea0eacaaf.jpg",
        "https://i.pinimg.com/564x/b9/04/22/b90422fa2c9182ee108e3f647993bad4.jpg",
        "https://i.pinimg.com/564x/c8/0d/99/c80d9914b1d4aa3c48dcac27c243fdcd.jpg",
      
          ],
       name:"Nawazish Ali",
       detail:"2 other",

      },
      description:{
        name:"Aslam-u-llah",
        text:"Lorem ipsum dolor sit.",
        harshText:"lifeStyle",
      },
      viewComments:"vie 10 comments",
  },
  {
    profile:
      "https://i.pinimg.com/564x/b9/04/22/b90422fa2c9182ee108e3f647993bad4.jpg",
    post: "https://i.pinimg.com/736x/5a/5a/48/5a5a48f5572097c7a68de8d1a284f537.jpg",
    userName: "Mahnaaz Noor",
    details: "Blochistan, 1 HOUR AGO",
    likes:{
      img :[
      
        "https://i.pinimg.com/564x/f8/ae/25/f8ae251b6fa6ecd74dcc9e5d94fbb3fc.jpg",
        "https://i.pinimg.com/564x/fc/62/5a/fc625a1c0cc8c88e529a3503ec26cfa1.jpg",
        "https://i.pinimg.com/564x/da/72/c4/da72c4f89ba943012abcc0bb37dcdf35.jpg",
      
          ],
       name:"Hina Khan",
       detail:"4 others",

      },
      description:{
        name:"Shah Nawaz",
        text:"Lorem ipsum dolor sit.",
        harshText:"lifeStyle",
      },
      viewComments:"view all 103 comments",
  },
  {
    profile:
      "https://i.pinimg.com/564x/b4/78/b3/b478b34a92a4889c7e4c1d2b592ee88f.jpg",
    post: "https://i.pinimg.com/564x/d0/38/0d/d0380d9fa89a63606a3f4343da5a4064.jpg",
    userName: "Alishba Hafeez",
    details: "Islamabad, 15 MINUTES AGO",
    likes:{
      img :[
      
        "https://i.pinimg.com/564x/f8/ae/25/f8ae251b6fa6ecd74dcc9e5d94fbb3fc.jpg",
        "https://i.pinimg.com/564x/07/c2/e6/07c2e62d8663d8676fd53fd842358389.jpg",
        "https://i.pinimg.com/564x/fc/62/5a/fc625a1c0cc8c88e529a3503ec26cfa1.jpg",
      
          ],
       name:"Horiya Muskaan",
       detail:"2 others",

      },
      description:{
        name:"Mubashir",
        text:"Lorem ipsum dolor sit.",
        harshText:"lifeStyle",
      },
      viewComments:"View 30comments",
  },
];

feedsdata.map((feed) => {
  feeds.innerHTML += createFeed(feed);
});
