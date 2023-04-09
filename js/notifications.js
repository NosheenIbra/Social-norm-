let createNotification = (obj) => {
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
// notifications-popup
let notifications = document.querySelector(".notifications-popup ")
let notificationssdata = [
    {
        profile: "https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-113-520x519.jpg",
        userName: "Haiqa khan ",
        detail: "5 MINUTES AGO",
    },
    {
        profile: "https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-110-520x520.jpg",
        userName: "Aisha Khan ",
        detail: "1 MINUTES AGO",
    },
    {
        profile: "https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-5-520x520.jpg",
        userName: "Rabbia Zaidi ",
        detail: "15 MINUTES AGO",
    },
    {
        profile: "https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-23-520x521.jpg",
        userName: "Sakina Majeed",
        detail: "30 MINUTES AGO",
    },
    {
        profile: "https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-64-520x519.jpg",
        userName: "|Sania Majeed",
        detail: "1 WEEK AGO",
    },
    {
        profile: "https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-66-520x519.jpg",
        userName: "Habiba Azam ",
        detail: "1  MONTH AGO",
    },
]

notificationssdata.map((Notification) => {
    notifications.innerHTML += createNotification(Notification)
})

// notificationssdata.map(({ profile, userName, detail }) =>{
//     notificationss.innerHTML += createNotification({ profile, userName, detail }),
// },)