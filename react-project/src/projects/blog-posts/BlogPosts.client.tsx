// Posts.client.tsx
import React, { useState, useEffect } from "react";
import BlogPosts from "./BlogPosts.server";
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      <BlogPosts posts={visiblePosts} />
      {visibleCount < posts.length && (
        <button onClick={showMorePosts} className="show-more-button">
          Show More
        </button>
      )}
    </div>
  );
}

export default Posts;
