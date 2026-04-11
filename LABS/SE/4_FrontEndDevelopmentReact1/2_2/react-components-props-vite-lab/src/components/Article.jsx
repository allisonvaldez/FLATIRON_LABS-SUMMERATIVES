// Import React
import React from "react";

// Create the Article component
function Article({ title, date = "January 1, 1970", preview }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    );
}

// Export to make it globally available
export default Article;
