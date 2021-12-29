let years = [];
let startYear = 1977;
let currentYear = new Date().getFullYear();

for(let i = currentYear; i >= startYear; i--) {
  years.push(i);
}

export default years;
