//business logic

function Contact(first, last, date) {
  this.date = date;
  this.firstName = first;
  this.lastName = last;
  this.accounts = [];
}

function BankAccount(initial, deposit, withdrawal, size, toppings) {
  this.initial = 12.00;
  this.deposit = 5.00;
  this.withdrawal = 2.00;
  this.size = "test";
  this.toppings = 1.00;
  //this.balance = balance;
}
Contact.prototype.fullName = function() {
  return this.firstName + "-" + this.lastName + " " + this.date;
}
BankAccount.prototype.fullAccount = function() {
  return this.initial + " " + this.deposit + " " + this.withdrawal + " " + this.size + "10.00 " + this.toppings;
}
var subtract = function(inputtedDeposit, inputtedWithdrawal){
	return inputtedDeposit - inputtedWithdrawal;
  }


// function resetFields() {
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input.new-initial").val("");
//     $("input.new-deposit").val("");
//     $("input.new-withdrawal").val("");
//     $("input.new-balance").val("");
// }

// user interface logic
$(document).ready(function() {
$("form#new-contact").submit(function(event) {
event.preventDefault();
    var inputtedDate = $("input#new-date").val();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedDate, inputtedFirstName, inputtedLastName);

    $(".new-account").each(function() {
      var inputtedInitial = parseInt ($(this).find("input.new-initial").val());
      var inputtedDeposit = parseInt ($(this).find("input.new-deposit").val());
      var inputtedWithdrawal = parseInt ($(this).find("input.new-withdrawal").val());
      var selectSize = parseInt ($(this).find("select.new-size").val());
      var selectToppings = parseInt ($(this).find("select.new-toppings").val());

      //var inputtedBalance = $(this).find("input.new-balance").val();
      var newAccount = new BankAccount(inputtedInitial, inputtedDeposit, inputtedWithdrawal, selectSize, selectToppings);
      newContact.accounts.push(newAccount)
      alert(BankAccount);

      var result = subtract (inputtedDeposit, inputtedWithdrawal);
      $("#Balance").text(result);

    });
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");




    $(".contact").last().click(function() {
      $("#show-contact").show();
      //$("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#accounts").text("");

      newContact.accounts.forEach(function(BankAccount) {
        $("ul#accounts").append("<li>" + BankAccount.fullAccount() +"</li>");



      });
    });

    //resetFields();

  });
});
