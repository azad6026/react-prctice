// Posts.client.tsx
import React, { useState, useEffect } from "react";
import BlogPosts from "./BlogPostsOnly";
import "./styles.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchBlogPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBlogPosts();
      setPosts(data);
      setVisiblePosts(data.slice(0, 10));
      setLoading(false);
    };

    fetchData();
  }, []);

  const showMorePosts = () => {
    const newVisibleCount = visibleCount + 10;
    setVisiblePosts(posts.slice(0, newVisibleCount));
    setVisibleCount(newVisibleCount);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.body.toLowerCase().includes(query.toLowerCase())
    );
    setVisiblePosts(filteredPosts.slice(0, visibleCount));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
      <BlogPosts posts={visiblePosts} />
      {visibleCount < posts.length && (
        <div className="show-more-button-container">
          <button onClick={showMorePosts} className="show-more-button">
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default Posts;
