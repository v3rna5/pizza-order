//business logic

function Contact(first, last, date) {
  this.date = date;
  this.firstName = first;
  this.lastName = last;
  this.accounts = [];
}

function PizzaPrice (initialCost, medium, large, mushroom, ham, bacon) {
  this.initialCost = 12.00;
  this.medium = 11.00;
  this.large = 14.00;
  this.mushroom = 2.00;
  this.ham = 1.00;
  this.bacon = 3.00;
  this.total =[];

}
Contact.prototype.FullName = function() {
  return this.firstName + "-" + this.lastName + " " + this.date;
}
PizzaPrice.prototype.PizzaPrice = function() {
  return  "Cost" + this.initialCost + "Size: " + this.medium + "Size: " + this.large + "Topping" + this.mushroom;
}
var add = function(inputtedInitial, selectSize, selectTopping){
	return inputtedInitial + selectSize + selectTopping;
  }


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
      var selectSize = $("select#new-size").val();
      var selectTopping = $("select#new-toppings").val();

      var newPrice = new PizzaPrice(inputtedInitial, selectSize, selectTopping);

      alert(selectSize);

      var result = add (selectSize, selectTopping);
      $("#Balance").append(result);
$("#Price").text()

      // if (selectSize === "Medium"){
      //   $("#Balance").append("10.00");
      // } else if (selectSize === "Large") {
      //     $("#Balance").append("12.00");
      // }
      // if (selectTopping === "Cheese", "Bacon", "Sausage", "Ham") {
      //   alert ("Additional 2");
      // }
    });


    $("ul#contacts").append("<li><span class='contact'>" + newContact.FullName() + "</span></li>");

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
