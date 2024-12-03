const posts = [];

function addPost(title, content) {
      posts.push({ title, content });
      renderPosts();
}

function deletePost(index) {
      posts.splice(index, 1);
      renderPosts(); 
}

function renderPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = ''; 

    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';

        const titleEl = document.createElement('div');
        titleEl.className = 'post-title';
        titleEl.textContent = `${index + 1}. ${post.title}`;

        const contentEl = document.createElement('div');
        contentEl.className = 'post-content';
        contentEl.textContent = post.content;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Удалить';
        deleteBtn.onclick = () => deletePost(index);

        postDiv.appendChild(titleEl);
        postDiv.appendChild(contentEl);
        postDiv.appendChild(deleteBtn);
        postList.appendChild(postDiv);
    });
}

document.getElementById('postForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        addPost(title, content);
        this.reset(); 
    }
});