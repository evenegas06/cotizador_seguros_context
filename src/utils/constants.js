/**
 * ID and Name of some brands.
 */
export const BRANDS = [
    { id: 1, name: 'Europeo' },
    { id: 2, name: 'Americano' },
    { id: 3, name: 'Asiático' },
];

/**
 * Last 20 years.
 */
export const YEARS = Array.from(new Array(20), (_a, index) => {
    const current_year = new Date().getFullYear();

    return current_year - index;
});

/**
 * Payment plans.
 */
export const PAYMENT_PLANS = [
    { id: 1, name: 'Básico' },
    { id: 2, name: 'Completo' },
];
