document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const feedContainer = document.querySelector('.feed-container');

    loginBtn.addEventListener('click', () => {
        // Simulate login
        loginBtn.innerText = 'Logged In';
        loginBtn.disabled = true;

        // Fetch and display feeds
        feedContainer.innerHTML = `
            <div class="feed">
                <h3>Twitter</h3>
                <p>Sample tweet from your Twitter feed.</p>
            </div>
            <div class="feed">
                <h3>Facebook</h3>
                <p>Sample post from your Facebook feed.</p>
            </div>
            <div class="feed">
                <h3>Instagram</h3>
                <p>Sample photo post from your Instagram feed.</p>
            </div>
        `;

        // Style individual feeds
        const feeds = document.querySelectorAll('.feed');
        feeds.forEach(feed => {
            feed.style.border = '1px solid #ddd';
            feed.style.borderRadius = '5px';
            feed.style.padding = '10px';
            feed.style.margin = '10px 0';
            feed.style.backgroundColor = '#fff';
        });
    });
});
