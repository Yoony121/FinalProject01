package com.usedgoods.server.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@ToString
public class CommentRequest {
    @NotBlank
    private String content;
    @NotBlank
    private int rating;
}
