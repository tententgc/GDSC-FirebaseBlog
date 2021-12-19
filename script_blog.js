window.addEventListener ("load", (event) => {
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get('id');
    
    const blogIdElem = document.getElementById("blog-id");
    blogIdElem.innerHTML = blogId;
});

