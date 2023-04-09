let friendRequest = (obj) => {
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
let requests=document.querySelector(".friend-requests")
requestsdata=[
    {

        profile: "https://i.pinimg.com/564x/d4/1d/cc/d41dcc512922b29a565c508b4adf2650.jpg",
        username: " Shah Noor",
        no: "6",
    },
    {

        profile: "https://i.pinimg.com/564x/63/49/ce/6349ce8ad4db887829764ed8903364c1.jpg",
        username: " Hijabi Queen",
        no: "10",
    },
    {

        profile: "https://i.pinimg.com/564x/df/88/15/df8815f28d72a643da74f40e796e0fb0.jpg",
        username: "Horiya Muskaan",
        no: "20",
    },

] 
requestsdata.map((request) =>{
    requests.innerHTML += friendRequest(request);
})

