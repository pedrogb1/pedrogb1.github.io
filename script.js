// Read more button
const expandBtn = document.getElementById('expand');
const expandText = document.querySelector('.box:nth-of-type(3) p');

expandBtn.addEventListener('click', function() {
  expandText.textContent = 'Análise dos bancos de dados existentes, que serão extraídos por um script de web scraping feito em python, possivelmente uma vez por dia, de forma a manter os dados atualizados. Esses dados serão então normalizados utilizando regex e IA, de forma que uma nomenclatura padrão seja usada e os resultados apresentados conforme necessidade no meio preferido pela empresa (pdf, txt, ou dashboard no Power BI)';
  expandBtn.style.display = 'none';
});

// Contact form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Por favor, preencha todos os campos do formulário.');
    return;
  }

  const formData = {
    name,
    email,
    message
  };

  console.log(formData);
  contactForm.reset();
});
