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

    const disqusShortname = "codenime"
    const disqusConfig = {
        url: "http://localhost:3000",
        identifier: useLocation().pathname.replace("/", ""),
        title: "Add a comment.."
    }

    return (
        <div className="comment">
        <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
        />
        </div>
    )
}

export default Comments;