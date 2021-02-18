window.addEventListener('load', () => {
    initFormEvents();
    renderTweets();
  
});





const tweets = [{
    text: 'HOLAAA :)',
    likes: 0,
    dateCreation: new Date()
}];





const initFormEvents = () => {
    const form = document.forms.new;
    const textArea = form.elements.textarea;
    

    form.addEventListener('submit', (ev) => {
       
        ev.preventDefault();


        if (textArea.value != "") {

           
            tweets.push({
                text: textArea.value,
                likes: 0,
                dateCreation: new Date()
            });
        }

        form.reset();
        renderTweets();
    });

   
    textArea.addEventListener('keyup', () => {
        console.log(textArea.value.length);
        if (textArea.value.length > 140) {
            return false;
        }
    });
};



const renderTweets = () => {

    const tweetFeeds = document.querySelector('.tweet_feeds');
    let HTMLString = "";

    console.log(tweets);

    tweets.forEach(tweet => {
        HTMLString += `
        <div class="tweet">
            <div class="tweet_header"> 
            
                <div class="tweet_user">
                  <div class="tweet_identificacion"> 
                      <img src="assets/img/baby-yoda-nombre_3x56.1280.jpg" alt="">
                    <div class="tweet_identificacion_nombre">
                       <div class="user_name">BABY YODA</div> 
                       <div class="user_name_nickname">@therealgrogu</div>
                    </div>
                    <div class="dot_separator">
                     <span class="fa fa-circle"></span>
                    </div>
                    <div class="user_time">3h</div>
                    <div class="trash">
                     <span class="fa fa-trash"></span>
                 </div>
                </div>
                
                <div class="tweet_body_text">${tweet.text}</div> 
            </div>   

          
            
            
            <div class="tweet_ctas">
                <div class="tweet_cta">
                    <div class="icon">
                        <span class="fa fa-comment"></span>
                    </div>
                    <div class="label">3</div>
                </div>
                <div class="tweet_cta">
                    <div class="icon">
                    <span class="fa fa-retweet"></span>
                    </div>
                    <div class="label">3</div>
                </div>
                <div class="tweet_cta like">
                    <div class="icon">
                    <span class="fa fa-heart"></span>
                    </div>
                    <div class="label">${tweet.likes}</div>
                </div>
               
            </div>
          
        </div>
        `;
    });

    tweetFeeds.innerHTML = HTMLString;

    initTweetsEvents();
    renderTweetsAmount();
};



const renderTweetsAmount = () => {
    const amount = tweets.length;
    const amountSelect = document.querySelector('.aside_trends .amount');
    const HTMLString = `${amount} tweets`;
    amountSelect.innerHTML = HTMLString;
}

const resetAllTweets = () => {
    const amountDom = document.querySelector('.aside_trends .reset');
    amountDom.addEventListener('click', () => {
        tweets.splice(0);

        renderTweets();
    });
}

const initTweetsEvents = () => {

    
    let tweetsDom = document.querySelectorAll('.tweet_feeds .tweet'); 

    tweetsDom.forEach((tweetDom, i) => {
        tweetDom.addEventListener('click', () => {
            console.log(tweetDom);
        });

       
        let trash = tweetDom.querySelector('.trash');
        console.log(trash);

        trash.addEventListener('click', () => {
            console.log(i);

            tweets.splice(i, 1);

            renderTweets();
        });

        let likes = tweetDom.querySelector('.like');
        likes.addEventListener('click', () => {
            tweets[i].likes++;

            renderTweets();
        });

    });
};