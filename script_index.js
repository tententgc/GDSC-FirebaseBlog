const template = `
    <div class="post">
        <div class="post-img" style="background-image: url({{banner}})">
            <span class="category-name {{category}}">{{category}}</span>
        </div>
        <div class="post-content">
            <div class="post-content-top">
                <span><i class="fas fa-calendar"></i>{{date}}</span>
            </div>
            <h2>{{title}}</h2>
        </div>
        <a href="blog.html?id={{id}}}" class="read-btn">READ MORE</a>
    </div>
`;

const displayPosts = (category) => {
    const posts = [
        {
            title: "The dummy blog for demo in GDSC Event.",
            banner: "https://firebasestorage.googleapis.com/v0/b/bsthun-web.appspot.com/o/gdsc%2F1_w2X7ExLGBzb-iznRW1rAVw.jpeg?alt=media&token=baacba4f-4188-4011-9135-c3becc5c9547",
            date: "December 14, 2021",
            category: "culture",
            id: "dummy1",
        },
        {
            title: "This is the second blog post.",
            banner: "https://firebasestorage.googleapis.com/v0/b/bsthun-web.appspot.com/o/gdsc%2F1_w2X7ExLGBzb-iznRW1rAVw.jpeg?alt=media&token=baacba4f-4188-4011-9135-c3becc5c9547",
            date: "December 15, 2021",
            category: "finance",
            id: "dummy2",
        },
        {
            title: "This is the third blog post.",
            banner: "https://firebasestorage.googleapis.com/v0/b/bsthun-web.appspot.com/o/gdsc%2FGoogleplex_HQ.jpeg?alt=media&token=2d86a886-84be-4351-86c4-37ca8a3e2b92",
            date: "December 15, 2021",
            category: "finance",
            id: "dummy3",
        },
    ];
    
    const items = posts.filter ((el) => category === "all" || el.category === category);
    
    let content = "";
    items.forEach ((el) => {
       content += Mustache.render (template, {
            banner: el.banner,
            category: el.category,
            date: el.date,
            title: el.title,
            id: el.id
        });
    });
    const postContainerElem = document.getElementById("post-container");
    postContainerElem.innerHTML = content;
};

window.addEventListener ("load", (event) => {
    const categoryElems = document.querySelectorAll (".category-title");
    const categoryTitle = ["all", "culture", "politics", "finance", "business", "sports"]
    for (let i = 0; i < categoryElems.length; i++) {
        categoryElems[i].addEventListener ("click", displayPosts.bind (this, categoryTitle[i]));
    }
    
    displayPosts ("all");
});
