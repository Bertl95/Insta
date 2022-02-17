

function render(){
    renderStories();
    renderSuggested();
    renderPosts();
}
function renderStories(){
    getById('story-container').innerHTML = ``;
    for (let i = 0; i < stories.length; i++) {
        const story = stories[i];       
        getById('story-container').innerHTML += `
        <div class="story">
                    <img src="${story['profile-image']}" class="story-profile">
                    <span class="username" id="username">${story['username']}</span>
        </div>
        `;
    }
}
function renderSuggested(){
    getById('suggested-wrap').innerHTML = ``;
    for (let i = 0; i < suggestedUsers.length; i++) {
        const suggestedUser = suggestedUsers[i];
        getById('suggested-wrap').innerHTML +=`
        <div class="suggested-container">
        <div class="suggested-pic">
            <img src="${suggestedUser['profile-image']}">
        </div>
        <div class="suggested-user-container">
            <div class="suggested-username">
               <span>${suggestedUser['username']}</span>
            </div>
            <div class="suggested-description">
               <span>${suggestedUser['description']}</span>
            </div>
        </div>
            <div class="suggested-follow">
                <a href="#">Folgen</a>
            </div>
        </div>
        `;
    }
}
function renderPosts(){    
    getById('post-wrap').innerHTML = ``;
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        getById('post-wrap').innerHTML += ` <!--html-->
        <div class="post-container">
            <div class="post-head">
                <div class="author">
                    <img src="${post['profile-image']}">
                    <span>${post['username']}</span>
                </div>
                <div class="post-options">
                    <img src="img/more_horiz_black_24dp.svg">
                </div>
            </div>

            <div class="post-image">
                <img src="${post['postimage']}">
            </div>

            <div class="post-foot-wrap">
            <div class="comment-share-container">
                <div class="comment-share-like">
                    <img src="img/favorite_border_black_24dp.svg">
                    <img src="img/mode_comment_black_24dp.svg">
                    <img src="img/send_black_24dp.svg" alt="">
                </div>
                <div class="save">  
                    <img src="img/turned_in_not_black_24dp.svg">
                </div>
            </div>
            <div class="liked-by">
                <img src="${post['liked-by-image']}">
                <span>
                    Gefällt <b>${post['liked-by-user']}</b> und <b>${post['liked-by-amount']} weitere Personen</b>
                </span>
            </div>
            <div class="description-comments-container">
                <div class="author-details">
                   <span> <b>${post['username']}</b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, dolorum. Maiores fugit labore rem at enim sapiente harum deserunt quod, totam pariatur nam aliquid soluta? Iste iusto similique earum dignissimos.</span><br>
                
                </div>
                <div class="more">
                    <a href="#">mehr</a>
                </div>
                <div id="comments-${i}">
                </div>   
                <div class="all-comments">
                    <a href="#">Alle Kommentare ansehen</a>
                </div>
            </div>
            <div class="timestamp">
                <span> ${post['timestamp']} </span>
            </div>
            <div class="comment-textfield-container ">
                <div class="comment-textfield">
                <img class="hide-mobile640" src="img/sentiment_satisfied_black_24dp.svg">
                <input id="comment-text${i}" type="text" placeholder="Kommentieren ...">
                </div>
                <button onclick="addComment(${i})">Posten</button>
            </div>
        </div>
        </div>
        `;
        loadComments(i);
        for (let j = 0; j < posts[i].comments.length; j++) {
            
            const comment = posts[i].comments[j];
            getById(`comments-${i}`).innerHTML += `
            <span>
            <b>${comment['username']}</b> 
            ${comment['comment']}
            </span> 
            <button onclick="delComment(${j}, ${i})" class="delBtn"> Löschen </button>
            <br>
            `;
            
                    
        }    
    }  
    ;
}
/*function renderComments(){
    for (let i = 0; i < posts[i].comments.length; i++) {
        loadComments(i);
        const comment = posts[i].comments[j];
            getById(`comments-${i}`).innerHTML += `
            <span>
            <b>${comment['username']}</b> 
            ${comment['comment']}
            </span> 
            <button onclick="delComment(${j}, ${i})" class="delBtn"> Löschen </button>
            <br>
            `;   
        
    }
    
}*/
function addComment(postIndex){
    let comment = getById('comment-text' + postIndex);
    posts[postIndex].comments.push({username:'PZ_RS3', comment: comment.value});
    saveComments(postIndex)
    renderPosts();
}
function delComment(commentIndex, postIndex){
    posts[postIndex].comments.splice(commentIndex, 1);
    saveComments(postIndex)
    renderPosts();
}
function saveComments(postIndex){
    let commentsAsText = JSON.stringify(posts[postIndex]['comments']);
    localStorage.setItem ('comments' + postIndex, commentsAsText);
}
function loadComments(postIndex){
    let commentsAsText = localStorage.getItem('comments' + postIndex);
    console.log(JSON.parse(commentsAsText));
    
}   
/*posts[postIndex].comments = JSON.parse(commentsAsText);*/