import { useCommentStore } from '../stores/commentStore';
import CommentCard from './CommentCard';

export default function CommentList({ sortOrder }) {
  const comments = useCommentStore(state => state.getSortedComments(sortOrder));

  return (
    <div className="space-y-4 mt-6">
      {comments.map(comment => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
}