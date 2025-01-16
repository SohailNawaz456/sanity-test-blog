"use client";

import React, { useState, useEffect } from "react";

interface Comment {
  id: string;
  username: string;
  comment: string;
}

const CommentSec: React.FC = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);


  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && comment.trim()) {
      const newComment: Comment = {
        id: Date.now().toString(),
        username,
        comment,
      };
      setComments([newComment, ...comments]); 
      setUsername("");
      setComment("");
    }
  };

  const handleDelete = (id: string) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Comment Section</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment"
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Post Comment
        </button>
      </form>

      <div>
        <h2 className="text-lg font-semibold mb-4">Comments</h2>
        <ul className="space-y-4">
          {comments.map(({ id, username, comment }) => (
            <li
              key={id}
              className="flex justify-between items-start p-4 border rounded-md bg-gray-100"
            >
              <div>
                <p className="font-bold text-blue-600">{username}:</p>
                <p>{comment}</p>
              </div>
              <button
                onClick={() => handleDelete(id)}
                className="text-red-500 hover:underline ml-4"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentSec;
