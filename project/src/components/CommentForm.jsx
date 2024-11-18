import { useState } from 'react';
import { useCommentStore } from '../stores/commentStore';
import StarRating from './StarRating';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

export default function CommentForm() {
  const [formData, setFormData] = useState({
    tldr: '',
    content: '',
    rating: 0,
    author: ''
  });

  const addComment = useCommentStore(state => state.addComment);

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({
      ...formData,
      createdAt: new Date().toISOString(),
      id: Date.now()
    });
    setFormData({ tldr: '', content: '', rating: 0, author: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Summary (TL;DR)</label>
        <input
          type="text"
          value={formData.tldr}
          onChange={e => setFormData(prev => ({ ...prev, tldr: e.target.value }))}
          className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Rating</label>
        <StarRating
          rating={formData.rating}
          onChange={rating => setFormData(prev => ({ ...prev, rating }))}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Your Review</label>
        <textarea
          value={formData.content}
          onChange={e => setFormData(prev => ({ ...prev, content: e.target.value }))}
          className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Your Name</label>
        <input
          type="text"
          value={formData.author}
          onChange={e => setFormData(prev => ({ ...prev, author: e.target.value }))}
          className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        <Send className="w-4 h-4 mr-2" />
        Submit Review
      </Button>
    </form>
  );
}