package com.usedgoods.server.repository;

import com.usedgoods.server.model.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BankAccountRepository extends JpaRepository<BankAccount, Long> {
    List<BankAccount> findBankAccountsBySellerId(Long sellerId);
}
