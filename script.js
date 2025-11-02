// --- YouTube Modal Logic ---
const videoThumb = document.getElementById('videoThumb');
const videoModal = document.getElementById('videoModal');
const modalVideoWrap = document.querySelector('#videoModal .wrap');
const youtubeFrame = document.getElementById('youtubeFrame');

videoThumb.addEventListener('click', () => {
  videoModal.style.opacity = 1;
  videoModal.style.pointerEvents = 'auto';
  modalVideoWrap.style.transform = 'scale(1)';
  youtubeFrame.src = "https://www.youtube.com/embed/PTVWESPKyNE?autoplay=1&rel=0&modestbranding=1";
});

videoModal.addEventListener('click', (e) => {
  if (e.target === videoModal) {
    videoModal.style.opacity = 0;
    videoModal.style.pointerEvents = 'none';
    modalVideoWrap.style.transform = 'scale(.92)';
    youtubeFrame.src = ""; // Stop playback when closed
  }
});
