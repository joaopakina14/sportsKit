const fs = require('fs');
const path = 'C:\\Users\\pakin\\OneDrive\\Ambiente de Trabalho\\Camisolas\\data\\inventory.json';

try {
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));
  const categories = new Set();
  data.forEach(item => {
    if (item.category) categories.add(item.category);
    if (item.categories) item.categories.forEach(c => categories.add(c));
  });
  console.log('Unique Categories:', Array.from(categories).sort());
} catch (e) {
  console.error('Error:', e.message);
}
