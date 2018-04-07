//business logic

function Contact(first, last, date) {
  this.date = date;
  this.firstName = first;
  this.lastName = last;
  this.accounts = [];
}
  function Pizza(size, toppings){
    this.size = size;
    this.toppings = toppings;
}

Contact.prototype.FullName = function() {
  return this.firstName + "-" + this.lastName + " " + this.date;
}

Pizza.prototype.totalCost = function(pizzaPrice){

  if (this.size === "Medium"){
    pizzaPrice += 2;
}
  else if (this.size === "Large"){
   pizzaPrice += 5;
 }

  if (this.toppings === "Mushroom" || this.toppings === "Spinach"){
    pizzaPrice += 1;

  }
   else if (this.toppings === "Ham" || this.toppings === "Sausage"){
    pizzaPrice += 3;

}

  return pizzaPrice;

}

// user interface logic
$(document).ready(function() {
$("form#new-contact").submit(function(event) {
event.preventDefault();
    var inputtedDate = $("input#new-date").val();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedDate, inputtedFirstName, inputtedLastName);

    var inputtedSize = $("input:radio[name=movie]:checked").val();
    var inputtedToppings = $("input:radio[name=time]:checked").val();
    var myPizza = new Pizza(inputtedSize, inputtedToppings);
    var pizzaPrice = 12;

    $("#pizza").append(myPizza.totalCost(pizzaPrice));
    $("ul#contacts").append("<li><span class='contact'>" + newContact.FullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#accounts").text("");

    });


    //resetFields();
});
});
