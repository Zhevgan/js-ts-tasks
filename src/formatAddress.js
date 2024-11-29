/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  // return the function,
  return function (address) {
    //We check each element of the address
    const addressParts = [];

    // We add each part of the address to the array
    if (address.street) addressParts.push(address.street);
    if (address.house) addressParts.push(address.house);
    if (address.apartment) addressParts.push(address.apartment);
    if (address.city) addressParts.push(address.city);
    if (address.postalCode) addressParts.push(address.postalCode);
    if (address.country) addressParts.push(address.country);

    return addressParts.join(', ');
  };
};
