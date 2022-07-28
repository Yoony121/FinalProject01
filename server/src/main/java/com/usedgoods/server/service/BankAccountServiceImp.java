package com.usedgoods.server.service;

import com.usedgoods.server.model.BankAccount;
import com.usedgoods.server.repository.BankAccountRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class BankAccountServiceImp implements BankAccountService {
    private final BankAccountRepository bankAccountRepository;

    @Override
    public BankAccount saveBankAccount(BankAccount bankAccount) {
        return bankAccountRepository.save(bankAccount);
    }

    @Override
    public BankAccount getDefaultBankAccountBySellerId(Long sellerId) {
        List<BankAccount> bankAccounts = getBankAccountsBySellerId(sellerId);
        return bankAccounts.stream().filter(account -> account.getDefaultAccount() == 1).findFirst().orElse(null);
    }

    @Override
    public List<BankAccount> getBankAccountsBySellerId(Long sellerId) {
        return bankAccountRepository.findBankAccountsBySellerId(sellerId);
    }
}
