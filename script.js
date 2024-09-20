// Seleziona tutti gli elementi con la classe "text"
const texts = document.querySelectorAll(".text");

// Suddivide il testo in parole e le avvolge in span
texts.forEach(text => {
  const words = text.textContent.split(' ');
  text.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
});

// Seleziona tutte le parole avvolte in span
const words = document.querySelectorAll(".text span");

// Funzione per aggiungere la classe "visible" quando la parola entra nella vista
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

// Osserva ogni parola
words.forEach(word => {
  observer.observe(word);
});

// Aggiunge l'animazione "active" al passaggio del mouse
words.forEach(word => {
  word.addEventListener("mouseover", function () {
    this.classList.add("active");
  });
});
