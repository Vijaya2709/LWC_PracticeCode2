public with sharing class AccountManager {
    
        @AuraEnabled(cacheable=true)
        public static List<Account> getAccount(Integer numberOfAccounts){
            return [SELECT Id, Name, Phone FROM Account LIMIT :numberOfAccounts];
        }

    
}
