import React from "react";
import Disqus from "disqus-react";
import { useLocation } from 'react-router-dom';

function Comments(){
    React.useEffect(() => {   
        const Script =document.createElement("script");
        Script.id = "dsq-count-scr";
        Script.src = "//codenime.disqus.com/count.js";
        Script.async = true;
        document.querySelector("body").appendChild(Script);
    })

    const disqusShortname = "codenime";

    var disqusConfig = {
        url: window.location.href,
        identifier: window.location.href,
        title: "Add a comment.."
    }

    return (
        <div className="comment">
            <h4>Comments</h4>
            <p>Give your opinion on the episode or go ahead and insult anyone who has a waifu inferior to yours!</p>
        <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
        />
        </div>
    )
}

export default Comments;