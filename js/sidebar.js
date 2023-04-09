let CreateMenuItem = (obj) => {
    let small = `<small id="messages" class="notifications-count">${obj.notifications} </small>`
    return `
            <a class="menu-item ${obj.active ? 'active' : ''}" id=${obj.id? obj.id : ""} >
                <span><i class="${obj.icon}">${obj.notifications?  small : "" }</i></span>
                <h3>${obj.menuitem}</h3>
            </a>
    
         `

}
let menuitems = document.querySelector(".sidebar")
let menuitemsdata = [
    {
        icon: "fa-solid fa-house",
        menuitem: "Home",
        active:true,
        
    },
    {
        icon: "fa-solid fa-compass",
        menuitem: "Explore",
        active:false,
    },
    {
        icon: "fa-solid fa-bell",
        menuitem: "Notifications",
        notifications : 9 +"+", 
        id: "notifications",
        active:false,

    },
    {
        icon: "fa-solid fa-envelope",
        menuitem: "Messages",
        notifications : 6,
        id: "messages-notification",
        active:false,
    },
    {
        icon: "fa-solid fa-bookmark",
        menuitem: "Bookmarks",
        active:false,
    },
    {
        icon: "fa-solid fa-chart-line",
        menuitem: "Analytics",
        active:false,
    },
    {
        icon: "fa-solid fa-palette",
        menuitem: "Theme",
        id:'theme',
        active:false,
    },
    {
        icon: "fa-solid fa-gear",
        menuitem: "Setting",
        active:false,
    },
];
menuitemsdata.map((menuitem) => {
    menuitems.innerHTML += CreateMenuItem(menuitem)


})
