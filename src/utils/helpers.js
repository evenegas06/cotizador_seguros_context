/**
 * Converts a number to a string by using the en-US locale.
 * 
 * @param {Number} amount 
 * @returns {String}
 */
export const formatCurrency = (amount) => {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
};