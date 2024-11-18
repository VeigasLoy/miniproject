import { useState } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import SortControls from './SortControls';
import { useCommentStore } from '../stores/commentStore';
import { Star } from 'lucide-react';

export default function CommentSection() {
  const [sortOrder, setSortOrder] = useState('newest');
  const averageRating = useCommentStore(state => state.getAverageRating());
  
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Traveler Reviews</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{averageRating.toFixed(1)}</span>
          </div>
          <SortControls sortOrder={sortOrder} onSortChange={setSortOrder} />
        </div>
      </div>
      <CommentForm />
      <CommentList sortOrder={sortOrder} />
    </div>
  );
}