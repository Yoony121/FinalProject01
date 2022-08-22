package com.usedgoods.server.controller;

import com.usedgoods.server.model.Comment;
import com.usedgoods.server.payload.CommentRequest;
import com.usedgoods.server.payload.MessageResponse;
import com.usedgoods.server.security.JwtUtils;
import com.usedgoods.server.service.CommentService;
import com.usedgoods.server.service.CustomerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path = "/api/comments")
@RequiredArgsConstructor
@Slf4j
public class CommentController {

    private final CommentService commentService;
    private final CustomerService customerService;
    @Autowired
    private JwtUtils jwtUtils;

    @GetMapping("/{productId}")
    public ResponseEntity<?> getComments(@PathVariable Long productId) {
        List<Comment> comments = commentService.getCommentsOfProduct(productId);
        return ResponseEntity.ok(comments);
    }

    @PostMapping("/{productId}/add")
    public ResponseEntity<?> addComments(@PathVariable Long productId, @RequestBody CommentRequest commentRequest, @RequestHeader("Authorization") String accessToken) {
        try {
            if (!jwtUtils.validateJwtToken(accessToken.substring(7))) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Invalid access token"));
            }
            String userName = jwtUtils.getUserNameFromJwtToken(accessToken.substring(7));
            Long customerId = customerService.getIdByUserName(userName);
            Comment comment = new Comment();
            comment.setProductId(productId);
            comment.setCustomerId(customerId);
            comment.setCustomerName(userName);
            buildCommentFromRequest(commentRequest, comment);
            Comment savedComment = commentService.saveComment(comment);
            return ResponseEntity.ok(savedComment);
        } catch (Exception ex) {
            log.info(ex.getMessage());
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Bad request");
    }

    @PostMapping("/{productId}/delete/{commentId}")
    public ResponseEntity<?> deleteComment(@PathVariable Long productId, @PathVariable Long commentId, @RequestHeader("Authorization") String accessToken) {
        try {
            if (!jwtUtils.validateJwtToken(accessToken.substring(7))) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Invalid access token"));
            }
            String userName = jwtUtils.getUserNameFromJwtToken(accessToken.substring(7));
            Long customerId = customerService.getIdByUserName(userName);
            Comment existing = commentService.getCommentById(commentId);
            if (existing.getCustomerId() != customerId) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Customer cannot delete other customer's comment.");
            }
            commentService.deleteComment(commentId);
            return ResponseEntity.ok(commentService.getCommentsOfProduct(productId));
        } catch (Exception ex) {
            log.info(ex.getMessage());
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Bad request");
    }

    @PostMapping("/{productId}/edit/{commentId}")
    public ResponseEntity<?> editComment(@PathVariable Long productId, @PathVariable Long commentId, @RequestBody CommentRequest commentRequest, @RequestHeader("Authorization") String accessToken) {
        try {
            if (!jwtUtils.validateJwtToken(accessToken.substring(7))) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Invalid access token"));
            }
            String userName = jwtUtils.getUserNameFromJwtToken(accessToken.substring(7));
            Long customerId = customerService.getIdByUserName(userName);
            Comment existing = commentService.getCommentById(commentId);
            if (existing.getCustomerId() != customerId) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Customer cannot delete other customer's comment.");
            }
            Comment comment = new Comment();
            comment.setProductId(productId);
            comment.setId(commentId);
            comment.setCustomerId(customerId);
            comment.setCustomerName(userName);
            buildCommentFromRequest(commentRequest, comment);
            commentService.editComment(comment);
            return ResponseEntity.ok(commentService.getCommentsOfProduct(productId));
        } catch (Exception ex) {
            log.info(ex.getMessage());
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Bad request");
    }

    private void buildCommentFromRequest(CommentRequest commentRequest, Comment comment) {
        comment.setContent(commentRequest.getContent());
        comment.setRating(commentRequest.getRating());
        comment.setTime(new Date());
    }

}
