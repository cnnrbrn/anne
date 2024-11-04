export function mobileFooter() {
  const bottomItem = document.getElementById('mobileFooter');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 100) {
      bottomItem.classList.remove('hidden');
    } else {
      bottomItem.classList.add('hidden');
    }
  });
}
