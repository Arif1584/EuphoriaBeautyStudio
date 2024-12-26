$(document).ready(function () {
        
    $('#bar').click(function () {
        $('.mobile').css('top', '0').fadeIn(300);
        $('.mobile').css('z-index', '2');
    });

    
    $('#xm').click(function () {
        $('.mobile').fadeOut(300, function() {
            $(this).css('top', '-100%');
        });
    });
});

$(document).ready(function() {
    function createBlogCard(blogPost) {
        const blogCard = `
            <div class="blog-card">
                <img class="blog-image" src="${blogPost.image}" alt="Blog Image">
                <div class="blog-content">
                    <span class="blog-tag">${blogPost.tag}</span>
                    <h4 class="blog-title">${blogPost.title}</h4>
                    <p class="blog-description">${blogPost.description}</p>
                    <div class="blog-footer">
                        <div class="user-info">
                            <h5 class="user-name">${blogPost.userName}</h5>
                            <small class="blog-time">${blogPost.time}</small>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return blogCard;
    }

    function renderBlogPosts(beautyBlogs) {
        const blogContainer = $("#blog-container");
        blogContainer.empty(); 

        for (let i = 0; i < 6; i++) { // Render 6 cards
            const randomIndex = Math.floor(Math.random() * beautyBlogs.length);
            const blogPost = beautyBlogs[randomIndex]; 
            const blogCard = createBlogCard(blogPost);
            blogContainer.append(blogCard);
        }
    }

    fetch('blog.json')
        .then(response => response.json())
        .then(data => {
            const beautyBlogs = data.beautyBlogs;
            renderBlogPosts(beautyBlogs);
            setInterval(function() {
                renderBlogPosts(beautyBlogs);
            }, 5000);
        })
        .catch(error => console.error('Error fetching beauty blog data:', error));
});