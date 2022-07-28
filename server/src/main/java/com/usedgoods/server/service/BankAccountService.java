package com.usedgoods.server.service;

import com.usedgoods.server.model.BankAccount;

import java.util.List;

public interface BankAccountService {
    BankAccount saveBankAccount(BankAccount bankAccount);
    BankAccount getDefaultBankAccountBySellerId(Long sellerId);
    List<BankAccount> getBankAccountsBySellerId(Long sellerId);
}
