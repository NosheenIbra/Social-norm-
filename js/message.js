let createMessage = (obj) => {
  return `
     
            <div class="message">
            <div class="profile-photo">
                <img src=${obj.profile}>
                <div class="${obj.active ? 'active' : ''}"></div>
            </div>
            <div class="message-body">
                <h5>${obj.userName}</h5>
                <p class="text-muted"> ${obj.message} </p>
            </div>
                        
            </div>
        `;
};
let messages = document.querySelector(".messages");
let messagesdata = [
  {
    profile: "https://i.pinimg.com/564x/56/c4/b9/56c4b94dbb9905d40cb206082dac4613.jpg",
    userName: "shahzaib Zafar",
    active:true,
    message: "Hello"
  },
  {
    profile: "https://i.pinimg.com/564x/48/3d/2e/483d2e3f763ef93afe4de048faed79a6.jpg",
    userName: "Iqra wali",
    active:false,
    message: "Message me."

  },
  {
    profile: "https://i.pinimg.com/564x/24/0f/91/240f91ea610f33c3f554b0de049dd70c.jpg",
    userName: "Madiha",
    active:false,
    message: "Can you explain please"

  },
  {
    profile: "https://i.pinimg.com/564x/df/ec/98/dfec98cd7b1c2899b5d33cd50b5a1fd0.jpg",
    active:true,
    userName: "Laraib khan",
    message: "What's about your family?"
  },
  {
    profile: "https://i.pinimg.com/564x/d0/2d/e8/d02de8e3975a9e91f537bb80c3bfa265.jpg",
    active:false,
    userName: "sumbal zeeshan",
    message: "Send me the notes."
  },
  {
    profile: "https://dp.profilepics.in/profile_pictures/pakistani_girls/pakistani_girls_61.jpg",
    userName: "Edem Quist",
    active:false,
    message: "your email address.."

  },
];
messagesdata.map((message) => {
  messages.innerHTML += createMessage(message);
});
