//business logic

function Contact(first, last, date) {
  this.date = date;
  this.firstName = first;
  this.lastName = last;
  this.accounts = [];
}

function PizzaPrice (initialCost, size, toppings) {
  this.initialCost = 12.00;
  // this.deposit = 5.00;
  // this.withdrawal = 2.00;
  this.size = [] ;
  this.toppings = [] ;
  //this.balance = balance;
}
Contact.prototype.fullName = function() {
  return this.firstName + "-" + this.lastName + " " + this.date;
}
PizzaPrice.prototype.fullPrice = function() {
  return this.initialCost + " " + this.size + " " + this.toppings;
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
      var inputtedInitial = parseInt ($(this).find("input.new-initialCost").val());
      var inputtedDeposit = parseInt ($(this).find("input.new-deposit").val());
      var inputtedWithdrawal = parseInt ($(this).find("input.new-withdrawal").val());
      var selectSize = $("select#new-size").val();
      var selectTopping = $("select#new-toppings").val();

      var newAccount = new PizzaPrice(inputtedInitial, inputtedDeposit, inputtedWithdrawal, selectSize, selectTopping);
      newContact.accounts.push(newAccount)
      newAccount.size.push(newAccount)
      newAccount.toppings.push(newAccount)
      console.log(newAccount.size);
      var result = subtract (inputtedDeposit, inputtedWithdrawal);
      $("#Balance").text(result);


      if (selectSize === "Medium"){
        alert("Price is 10.00");
      } else if (selectSize === "Large") {
        alert ("Price is 12.00");
      }
      if (selectTopping === "Cheese", "Bacon", "Sausage", "Ham") {
        alert ("Additional 2");
      }
    });
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#accounts").text("");

      newContact.accounts.forEach(function(PizzaPrice) {
        $("ul#accounts").append("<li>" + PizzaPrice.fullPrice() + "</li>");




      });
    });

    //resetFields();

  });
});
