function startTypingAnimation() {
  var element = document.querySelector("#welcome-section h1");
  element.classList.remove("typing-animation");
  void element.offsetWidth; // Restart the animation by reflowing the element
  element.classList.add("typing-animation");
}

// Mulai animasi typing saat halaman dimuat
window.addEventListener("load", function () {
  startTypingAnimation();

  // Mengulangi animasi typing setelah beberapa detik
  var interval = 5000; // Durasi dalam milidetik (misalnya 5000 = 5 detik)
  setInterval(startTypingAnimation, interval);
});
