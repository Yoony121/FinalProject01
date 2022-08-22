package com.usedgoods.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "product_name")
    private String productName;
    @Column(name = "price")
    private float price;
    @Column(name = "quantity")
    private int quantity;
    @Column(name = "short_description")
    private String shortDescription;
    @Column(name = "full_description")
    private String fullDescription;
    @Column(name = "image")
    private String image;
    @Column(name = "category")
    private String category;
    @Column(name = "seller_id")
    private Long sellerId;
    @Column(name = "comments_count")
    private int commentsCount;

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if (!(other instanceof Product)) {
            return false;
        }
        Product p = (Product) other;
        return (this.id == p.getId());
    }

    @Override
    public int hashCode() {
        int result = 17;
        result = 31 * result + id.hashCode();
        result = 31 * result + productName.hashCode();
        result = 31 * result + 37 * (int) price;
        result = 31 * result + 37 * quantity;
        result = 31 * result + shortDescription.hashCode();
        result = 31 * result + fullDescription.hashCode();
        result = 31 * result + image.hashCode();
        result = 31 * result + category.hashCode();
        result = 31 * result + sellerId.hashCode();
        return result;
    }
}
