import { formatDistanceToNow } from 'date-fns';
import StarRating from './StarRating';
import { User } from 'lucide-react';

export default function CommentCard({ comment }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg text-gray-900">{comment.tldr}</h3>
          <StarRating rating={comment.rating} readonly />
        </div>
        <span className="text-sm text-gray-500">
          {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
        </span>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">{comment.content}</p>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <User className="w-4 h-4" />
        <span>{comment.author}</span>
      </div>
    </div>
  );
}