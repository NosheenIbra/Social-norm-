
// =================================NOTIFICATION POPUP=========

export const createNotification = (obj) => {
    return `
            <div class: "Notification">
                <div class="profile-photo">
                    <img src=${obj.profile}>
                </div>

                <div class="notification-body">
                    <b>${obj.userName}</b> accepted your friend request
                    <small class="text-muted">2 ${obj.detail}</small>
                </div>
            </div>
    `
}


// ==============================MESSAGES========================

export const createMessage = (obj) => {
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



//   =============================FRIEND REQUESTS================

export const friendRequest = (obj) => {
    return `
              <div class="request">
                  <div class="info">
                      <div class="profile-photo">
                          <img src=${obj.profile}>
                      </div>
                      <div class="req.mes">
                          <div>${obj.username}</div>
                          <p class="text-muted"> ${obj.no} mutual friends </p>
                      </div>
                  </div>
                  <div class="actions">
                      <button class="btn btn-primary">Accept</button>
                      <button class="btn">Decline</button>
                  </div>
              </div>
      
      `;
  };



//===================================SIDE BAR=======================

export const CreateMenuItem = (obj) => {
    let small = `<small id="messages" class="notifications-count">${obj.notifications} </small>`
    return `
            <a class="menu-item ${obj.active ? 'active' : ''}" id=${obj.id? obj.id : ""} >
                <span><i class="${obj.icon}">${obj.notifications?  small : "" }</i></span>
                <h3>${obj.menuitem}</h3>
            </a>
    
         `

}

// ===================================STORIES========================

export const createStory = (obj) => {
    return `
    <div class="story" style ="background: url(${obj.bgImg}) no-repeat center center/cover">
            <div class="profile-photo">
               <img src="${obj.profile}">
            </div>
            <p class="name">${obj.name}</p>
            </div>
            `

};


// ===================================FEEDS=======================

export const createFeed = (obj) => {
    // https://i.pinimg.com/564x/f4/26/e7/f426e72a9ea322652ddca1e7f9b645ee.jpg
    console.log(obj);  
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