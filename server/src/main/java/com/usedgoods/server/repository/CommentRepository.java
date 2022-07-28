package com.usedgoods.server.repository;

import com.usedgoods.server.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> getCommentsByProductId(Long productId);
}
