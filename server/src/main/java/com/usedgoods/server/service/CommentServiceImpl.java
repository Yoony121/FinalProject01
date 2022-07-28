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
}
