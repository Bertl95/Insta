let stories = [
    {        
        'profile-image': 'img/profil1.jpg',
        'username': 'hyMedia'
    },
    {        
        'profile-image': 'img/profil2.jpg',
        'username': 'TimoSa'
    },
    {        
        'profile-image': 'img/profil3.jpg',
        'username': 'WernerSo'
    },
    {        
        'profile-image': 'img/profil4.jpg',
        'username': 'ManfredMo'
    },
    {        
        'profile-image': 'img/profil5.jpg',
        'username': 'MichaelDi'
    },
    {        
        'profile-image': 'img/profil6.jpg',
        'username': 'AlbertMi'
    },
    {        
        'profile-image': 'img/profil7.jpg',
        'username': 'FranzDo'
    },
    {        
        'profile-image': 'img/profil1.jpg',
        'username': 'ManuelSei'
    }
]
let suggestedUsers = [
    {
               
        'profile-image': 'img/profil7.jpg',
        'username': 'SebastianDo',
        'description': 'Folgt dir'
    
    },
    {
               
        'profile-image': 'img/profil6.jpg',
        'username': 'SanniKo',
        'description': 'Folgt dir'
    
    },
    {
               
        'profile-image': 'img/profil5.jpg',
        'username': 'AlexJo',
        'description': 'Folgt dir'
    
    },
    {
               
        'profile-image': 'img/profil4.jpg',
        'username': 'SeebubDo',
        'description': 'Folgt dir'
    
    },
    {
               
        'profile-image': 'img/profil3.jpg',
        'username': 'MarkusMo',
        'description': 'Folgt dir'
    
    },
]
let posts = [
    {        
        'profile-image': 'img/profil3.jpg',
        'username': 'MarkusMo',
        'postimage': 'img/post1.jpg',
        'post-description': 'Hier ein Bild aus meinem Urlaub',
        'liked-by-image': 'img/profil1.jpg',
        'liked-by-user': 'hubiDu',
        'liked-by-amount': 187,
        'timestamp':'VOR 20 STUNDEN',
        'comments' : []       
    },
    {        
        'profile-image': 'img/profil6.jpg',
        'username': 'SebiDo',
        'postimage': 'img/post2.jpg',
        'post-description': 'Hier ein Bild aus meinem Urlaub',
        'liked-by-image': 'img/profil2.jpg',
        'liked-by-user': 'hansiDu',
        'liked-by-amount': 1337,
        'timestamp':'VOR 10 STUNDEN',
        'comments' : []        
    },
    {        
        'profile-image': 'img/profil1.jpg',
        'username': 'SanniWi',
        'postimage': 'img/post3.jpg',
        'post-description': 'Hier ein Bild aus meinem Urlaub',
        'liked-by-image': 'img/profil3.jpg',
        'liked-by-user': 'arminSo',
        'liked-by-amount': 187,
        'timestamp':'VOR 22 STUNDEN',
        'comments' : []        
    },
    {        
        'profile-image': 'img/profil4.jpg',
        'username': 'karlWeb',
        'postimage': 'img/post4.jpg',
        'post-description': 'Hier ein Bild aus meinem Urlaub',
        'liked-by-image': 'img/profil1.jpg',
        'liked-by-user': 'hubiDu',
        'liked-by-amount': 1337,
        'timestamp':'VOR 12 STUNDEN',
        'comments' : []        
    },
    {        
        'profile-image': 'img/profil5.jpg',
        'username': 'saveSea',
        'postimage': 'img/post5.jpg',
        'post-description': 'Hier ein Bild aus meinem Urlaub',
        'liked-by-image': 'img/profil4.jpg',
        'liked-by-user': 'TobiSa',
        'liked-by-amount': 187,
        'timestamp':'VOR 14 STUNDEN',
        'comments' : []        
    },
    {        
        'profile-image': 'img/profil6.jpg',
        'username': 'martinMu',
        'postimage': 'img/post6.jpg',
        'post-description': 'Hier ein Bild aus meinem Urlaub',
        'liked-by-image': 'img/profil1.jpg',
        'liked-by-user': 'hubiDu',
        'liked-by-amount': 1337,
        'timestamp':'VOR 15 STUNDEN',
        'comments' : []        
    },
    {        
        'profile-image': 'img/post1.jpg',
        'username': 'klausKo',
        'postimage': 'img/post7.jpg',
        'post-description': 'Hier ein Bild aus meinem Urlaub',
        'liked-by-image': 'img/profil1.jpg',
        'liked-by-user': 'hubiDu',
        'liked-by-amount': 187,
        'timestamp':'VOR 16 STUNDEN',
        'comments' : []        
    }
]

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
            <div class="comment-textfield-container hide-mobile640">
                <div class="comment-textfield">
                <img src="img/sentiment_satisfied_black_24dp.svg">
                <input id="comment-text${i}" type="text" placeholder="Kommentieren ...">
                </div>
                <button onclick="addComment(${i})">Posten</button>
            </div>
        </div>
        </div>
        `;

        for (let j = 0; j < posts[i].comments.length; j++) {
            console.log('Hello for comments')
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
}
function addComment(postIndex){
    let comment = getById('comment-text' + postIndex);
    posts[postIndex].comments.push({username:'PZ_RS3', comment: comment.value});
    renderPosts();
}
function delComment(commentIndex, postIndex){
    posts[postIndex].comments.splice(commentIndex, 1);
    renderPosts();
}
function saveToLocalStorage(){
    let commentAsText = JSON.stringify(posts['comments'][i])
    posts
}