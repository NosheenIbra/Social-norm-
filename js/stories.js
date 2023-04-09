let createStory = (obj) => {
    return `
    <div class="story" style ="background: url(${obj.bgImg}) no-repeat center center/cover">
            <div class="profile-photo">
               <img src="${obj.profile}">
            </div>
            <p class="name">${obj.name}</p>
            </div>
            `

};
let stories = document.getElementsByClassName("stories")[0]
let storyData = [
    {
        profile: "https://i.pinimg.com/564x/9e/1e/47/9e1e47866da8878822e79f5af1c579dd.jpg",
        name: "Muhammad Bilal",
        bgImg: "https://i.pinimg.com/564x/9d/c4/08/9dc4088bb769b72d3dc5988364413408.jpg",
    },
    {
        profile: "https://i.pinimg.com/564x/79/3a/c2/793ac22d3e95bb93d311a13eae59531c.jpg",
        name: "Muhammad Talha",
        bgImg: "https://i.pinimg.com/564x/d9/82/aa/d982aa0628d3912784e185df4578bd47.jpg",
    },
    {
        profile: "https://i.pinimg.com/564x/d9/1c/7b/d91c7b1f935e24c05531b4341a57c988.jpg",
        name: "Hira Nosheen",
        bgImg: "https://plus.unsplash.com/premium_photo-1661685126470-8421243def69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2h1dG5leXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
        profile: "https://i.pinimg.com/564x/12/b9/78/12b978dbbb01e2ce57faa6578900260a.jpg",
        name: "Muhammad Ahsan",
        bgImg: "https://i.pinimg.com/564x/6e/38/f2/6e38f2cadc947ee72c262f2e193aac98.jpg",
    },
    {
        profile: "https://i.pinimg.com/564x/c6/0b/4a/c60b4a950107a64ab54f1aea762f26ab.jpg",
        name: "Husna shah",
        bgImg: "https://s26162.pcdn.co/wp-content/uploads/sites/3/2018/10/poe-dore-raven-3.jpg",
    },
    {
        profile: "https://i.pinimg.com/564x/89/d7/87/89d787fa0bf8e3527db88f694887547e.jpg",
        name: "Sahar Hayat",
        bgImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNDeXw6XlQ9s8iyZtU1y7pASS5DNMPOgANOsCE23cp5du4lErabFr5CQt1pM4ZiWRpII&usqp=CAU",
    }

]
storyData.map((story) => {
    stories.innerHTML += createStory(story)
})




// let stories = document.getElementsByClassName("stories")[0]
// let storyData = [


//     {
//         profile : "https://i.pinimg.com/564x/9e/1e/47/9e1e47866da8878822e79f5af1c579dd.jpg",
//         name : "Muhammad Bilal",
//         bgImg:"https://i.pinimg.com/564x/9d/c4/08/9dc4088bb769b72d3dc5988364413408.jpg",
//     },
//     {
    //         profile : "https://i.pinimg.com/564x/79/3a/c2/793ac22d3e95bb93d311a13eae59531c.jpg",
//         name : "Muhammad Talha",
//         bgImg:"https://i.pinimg.com/564x/d9/82/aa/d982aa0628d3912784e185df4578bd47.jpg",
//     },
//     {
//         profile : "https://i.pinimg.com/564x/d9/1c/7b/d91c7b1f935e24c05531b4341a57c988.jpg",
//         name : "Hira Nosheen",
//         bgImg:"https://plus.unsplash.com/premium_photo-1661685126470-8421243def69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2h1dG5leXxlbnwwfHwwfHw%3D&w=1000&q=80",
//     }, 
//     {
//         profile : "https://i.pinimg.com/564x/12/b9/78/12b978dbbb01e2ce57faa6578900260a.jpg",
//         name : "Muhammad Ahsan",
//         bgImg:"https://i.pinimg.com/564x/6e/38/f2/6e38f2cadc947ee72c262f2e193aac98.jpg",
//     },
//     {
//         profile : "https://i.pinimg.com/564x/c6/0b/4a/c60b4a950107a64ab54f1aea762f26ab.jpg",
//         name : "Husna shah",
//         bgImg:"https://s26162.pcdn.co/wp-content/uploads/sites/3/2018/10/poe-dore-raven-3.jpg",
//     },
//     {
//         profile : "https://i.pinimg.com/564x/89/d7/87/89d787fa0bf8e3527db88f694887547e.jpg",
//         name : "Sahar Hayat",
//         bgImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNDeXw6XlQ9s8iyZtU1y7pASS5DNMPOgANOsCE23cp5du4lErabFr5CQt1pM4ZiWRpII&usqp=CAU",
//     }
// ]
// storyData.forEach(story=>{
//     stories.innerHTML +=
//     `
//         // <div class="story" style ="background: url(${story.bgImg}) no-repeat center center/cover">
//         //     <div class="profile-photo">
//         //        <img src="${story.profile}">
//         //     </div>
//         //     <p class="name">${story.name}</p>
//         // </div>
//     `
// })
// 
