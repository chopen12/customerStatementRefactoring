// customer statement
function statement(customer, movies) {
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${customer.name}\n`;

    // setting iteration length 
    for (let i = 0, totalRents = customer.rentals.length; i < totalRents; i++) {
      // destructuring 
      const {days, movieID} = customer.rentals[i];
      const {code, title} = movies[movieID];
      
      // determine amount for each movie declaratively, reducing cases since shown are 3 only
      const thisAmount =
      code === "regular"
        ? days > 2
          ? (days - 2) * 1.5
          : 2
        : code === "new"
        ? days * 3
        : days > 3
        ? (days - 3) * 1.5
        : 1.5;
      
      //add 2 frequent points for a two day new release rental else 1
      frequentRenterPoints += (code === "new" && days > 2) ? 2 : 1;

      //print figures for this rental
      result += `\t${title}\t${thisAmount}\n` ;
      totalAmount += thisAmount;
    }

    // add footer lines
    result += `Amount owed is ${totalAmount}\n You earned ${frequentRenterPoints} frequent renter points\n`;

    return result;
  }

/* Customer Record
{
  "name": "franklin",
  "rentals": [
    {"movieID": "F001", "days": 3},
    {"movieID": "F002", "days": 1},
  ]
}
*/

/* Movie Dataset
{
  "F001": {"title": "Ran", "code": "regular"},
  "F002": {"title": "Trois Couleurs: Bleu", "code": "regular"},
  // etc
}
*/