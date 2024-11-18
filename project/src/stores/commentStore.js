import { create } from 'zustand';

export const useCommentStore = create((set, get) => ({
  comments: [],
  
  addComment: (comment) => set(state => ({
    comments: [...state.comments, comment]
  })),

  getAverageRating: () => {
    const comments = get().comments;
    if (comments.length === 0) return 0;
    const sum = comments.reduce((acc, comment) => acc + comment.rating, 0);
    return sum / comments.length;
  },

  getSortedComments: (sortOrder) => {
    const comments = [...get().comments];
    return comments.sort((a, b) => {
      if (sortOrder === 'newest') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
  }
}));