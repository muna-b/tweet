window.addEventListener("DOMContentLoaded", () => {
    bindTweet();
});

function bindTweet() {
    const elements = document.querySelectorAll(".btn-danger");
    const tweetContainer = document.querySelector("#tweet-list-container");
    
    elements.forEach(e => {
        e.addEventListener('click', ($event) => {
            const tweetId = $event.target.getAttribute('tweetid');
            axios.delete('/tweets/' + tweetId)
                .then( function(res) {
                        tweetContainer.innerHTML = res.data;
                        bindTweet();
                })
                .catch( function(e) {
                    console.log(e);
                })
        })
    })
}
