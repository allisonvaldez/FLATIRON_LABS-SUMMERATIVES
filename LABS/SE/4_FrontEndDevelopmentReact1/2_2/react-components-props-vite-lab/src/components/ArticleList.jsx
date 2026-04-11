// First import React
import React from "react";

// Import the children components
import Article from "./Article";

// Create ArticleList component
function ArticleList({ posts }) {
    // Create an array of article components by mapping over an array
    const articles = posts.map(
        function (post) {
            return (
                <Article
                    // Unique key attribute for each Article post
                    key={post.id}
                    // Post title
                    title={post.title}
                    // Post date of post
                    date={post.date}
                    // Post preview
                    preview={post.preview}
                />
            );
        });

    return (
        <main id="article-list">
            {articles}
        </main>

    );
}

// Export to make it globally available
export default ArticleList;