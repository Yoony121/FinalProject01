package com.usedgoods.server.service;

import com.usedgoods.server.model.Comment;

import java.util.List;

public interface CommentService {
    List<Comment> getCommentsOfProduct(Long productId);
}
