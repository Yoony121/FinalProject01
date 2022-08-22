package com.usedgoods.server.service;

import com.usedgoods.server.model.Comment;

import java.util.List;

public interface CommentService {
    List<Comment> getCommentsOfProduct(Long productId);

    Comment saveComment(Comment comment);

    void deleteComment(Long commentId);

    Comment editComment(Comment comment);

    Comment getCommentById(Long commentId);
}
