// "Where" button
document.querySelector('.img-btn.where').addEventListener('click', () => {
  Swal.fire({
    title: 'where?',
    text: 'G5 - live music bar heiligenstädterstraße 31, bogen 217, 1190 wien',
    width: '700px',
    showConfirmButton: false,
    customClass: { popup: 'swal-where' }
  });
});

// "When" button
document.querySelector('.img-btn.when').addEventListener('click', () => {
  Swal.fire({
    title: 'when?',
    text: 'all hallows eve, october 31st 7 pm',
    width: '700px',
    showConfirmButton: false,
    customClass: { popup: 'swal-when' }
  });
});

// "Who" button
document.querySelector('.img-btn.who').addEventListener('click', () => {
  Swal.fire({
    title: 'who?',
    text: 'you, me, us and them!',
    width: '700px',
    showConfirmButton: false,
    customClass: { popup: 'swal-who' }
  });
});

// "Why" button
document.querySelector('.img-btn.why').addEventListener('click', () => {
  Swal.fire({
    title: 'why?',
    text: 'why not?',
    width: '700px',
    showConfirmButton: false,
    customClass: { popup: 'swal-why' }
  });
});

// "What" button
document.querySelector('.img-btn.what').addEventListener('click', () => {
  Swal.fire({
    title: 'what?',
    text: 'a party, of course.',
    width: '700px',
    showConfirmButton: false,
    customClass: { popup: 'swal-what' }
  });
});

