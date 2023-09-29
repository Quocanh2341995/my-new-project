class Post {
    constructor(id, name, content, img) {
        this.id = id;
        this.name = name;
        this.content = content;
    }
}


const posts = [
    new Post(1, "Cristiano Ronaldo", aaaaaaaaaaaaaa,),
    new Post(2, "Toni Kroos", aaaaaaaaaaaaaa,),
    new Post(3, "Luka Modric", aaaaaaaaaaaaaa,)
];

function renderPost() {
    let htmls = posts.map(function (post) {
        return `
            <div class="friends-post">

                <div class="friend-post-top">

                    <div class="img-and-name">

                        <img src="./image/cr.jpg">

                        <div class="friends-name">
                            <p class="friends-name">
                                ${post.name}
                            </p>
                            <p class="time">3 giờ.<i class="fa-solid fa-earth-americas"></i></p>
                        </div>

                    </div>

                    <div class="menu">

                        <i class="fa-solid fa-ellipsis"></i>

                    </div>

                </div>

                <p>${post.content}</p>
                <img src="image/crpost.jpeg">

                <div class="info">

                    <div class="emoji-img">
                        <img src="image/like.png">
                        <img src="image/haha.png">
                        <img src="image/heart.png">
                        <p>Bạn, Kaká và 8,9k người khác</p>
                    </div>

                    <div class="comment">
                        <p>234 Comments</p>
                        <p>1.5k Shares</p>
                    </div>
                </div>

                <hr>

                <div class="like">
                    <div class="like-icon">
                        <i class="fa-solid fa-thumbs-up activi"></i>
                        <p>Thích</p>
                    </div>

                    <div class="like-icon">
                        <i class="fa-solid fa-comment"></i>
                        <p>Bình luận</p>
                    </div>

                    <div class="like-icon">
                        <i class="fa-solid fa-share"></i>
                        <p>Chia sẻ</p>
                    </div>
                </div>

                <hr>

                <div class="comment-warpper">
                    <img src="./image/avataruser.jpg">
                    <div class="circle"></div>

                    <div class="comment-search">
                        <input type="text" placeholder="Viết bình luận ...">
                        <i class="fa-regular fa-face-grin-squint-tears"></i>
                        <i class="fa-regular fa-face-smile"></i>
                        <i class="fa-solid fa-camera"></i>

                    </div>
                </div>
            </div>
        `
    });
}









var modal = document.getElementById("modal");

function handleBtnModalClose() {
    modal.style.display = "none";
}

window.onclick = function (evt) {
    if (evt.target == modal) {
        modal.style.display = "none";
    }
}

function handleBtnModalOpen() {
    modal.style.display = "flex";
}

function openModal(modal) {
    modal.style.display = "flex";
}

