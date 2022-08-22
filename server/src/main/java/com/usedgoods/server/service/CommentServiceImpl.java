package com.usedgoods.server.service;

import com.usedgoods.server.model.Comment;
import com.usedgoods.server.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class CommentServiceImpl implements CommentService {
    private final CommentRepository commentRepository;
    @Override
    public List<Comment> getCommentsOfProduct(Long productId) {
        return commentRepository.getCommentsByProductId(productId);
    }

    @Override
    public Comment saveComment(Comment comment) {
        return commentRepository.save(comment);
    }

    @Override
    public void deleteComment(Long commentId) {
        commentRepository.deleteById(commentId);
    }

    @Override
    public Comment editComment(Comment comment) {
        Comment existing = commentRepository.findById(comment.getId()).get();
        existing.setRating(comment.getRating());
        existing.setContent(comment.getContent());
        existing.setTime(comment.getTime());
        commentRepository.save(comment);
        return existing;
    }

    @Override
    public Comment getCommentById(Long commentId) {
        return commentRepository.findById(commentId).get();
    }


}
