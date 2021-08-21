class Account {
    constructor(name,balance=0){
        this.name = name ;
        this.balance = balance ;
        
    }

    iban(){
        const IBAN = "GR" + Math.floor(Math.random()*100000000000);

        return `New account created for : ${this.name}.IBAN: ${IBAN}`

    }

}

const newAccount = new Account ("George Bountos");

Account.prototype.getBalance=function (){

    return this.balance
    }

    Account.prototype.deposit=function(deposit) {
       
        this.balance=deposit+this.balance;
        return this.balance;
        
    }

    Account.prototype.withdraw=function(withdraw){
       
        if (withdraw < 0) {
            return "Error Invalid amount"
            }
            else if(typeof(withdraw)!=="number") {
                return "Error invalid amount"
               
            }
            else if (withdraw>this.balance){
                return "insufficient balance"
            }
            else{
                this.balance= this.balance-withdraw
                return this.balance ;

            }
          
    }

  console.log(newAccount.deposit(100))
  console.log(newAccount.getBalance())
  console.log(newAccount.withdraw(50))
  console.log(newAccount.withdraw(500))
  console.log(newAccount.deposit(800))

  console.log(newAccount.iban())