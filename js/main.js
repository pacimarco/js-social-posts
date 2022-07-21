const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
/*
const itemDom = document.querySelector('.items');

images.forEach((img,indice)=>{
    console.log(img.url,img.title,img.description);
    itemDom.innerHTML += `<div class="item">
    <img src="${img.url}" alt="${img.title}">
    <h3>${img.title}</h3>
    <p>${img.description}</p>
    </div>`;
});

<div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">Phil Mangione</div>
                        <div class="post-meta__time">4 mesi fa</div>
                    </div>

*/
const likedArr = [];
const postDom = document.querySelector('.post');
posts.forEach((post,indice)=>{
    console.log(post.id,post.content,post.media,post.author,post.likes,post.created);
    postDom.innerHTML += `<div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${post.author.name}</div>
            <div class="post-meta__time">${post.created}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${post.content} </div>
<div class="post__image">
    <img src="${post.media}" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid="${post.id}">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
        </div>
    </div> 
</div>`;
    
    
});


const jsLikeButtonsDom = document.getElementsByClassName('js-like-button');

for (let i=0; i < jsLikeButtonsDom.length; i++){
    jsLikeButtonsDom[i].addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(e.target.dataset.postid);
        e.target.classList.add('like-button--liked');

        const postId = e.target.getAttribute('data-postid');
        const likeCounterDom = document.getElementById('like-counter-' + postId);
        console.log(postId);

        
        likeCounterDom.innerHTML = parseInt(likeCounterDom.innerHTML) + 1;
        likedArr.push(postId);
    }
    )
}