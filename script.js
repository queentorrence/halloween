  // "Where" button
  document.querySelector('.img-btn.where').addEventListener('click', () => {
    Swal.fire({
      title: 'Where',
      text: 'G5 - live music bar <br> heiligenstädterstraße 31, bogen 217, 1190 wien',
      width: '700px',
      confirmButtonText: 'Got it!' ,
      customClass: {
      popup: 'swal-where'
    }
    });
  });

  // "When" button
  document.querySelector('.img-btn.when').addEventListener('click', () => {
    Swal.fire({
      title: 'When',
      text: 'Add your info here!',
      width: '700px',
      confirmButtonText: 'Okay!'
    });
  });

  // "Who" button
  document.querySelector('.img-btn.who').addEventListener('click', () => {
    Swal.fire({
      title: 'Who',
      text: 'Add your info here!',
      width: '700px',
      confirmButtonText: 'Nice!'
    });
  });

  // "Why" button
  document.querySelector('.img-btn.why').addEventListener('click', () => {
    Swal.fire({
      title: 'Why',
      text: 'Add your info here!',
      width: '700px',
      confirmButtonText: 'I see!'
    });
  });

  // "What" button
  document.querySelector('.img-btn.what').addEventListener('click', () => {
    Swal.fire({
      title: 'What',
      text: 'Add your info here!',
      width: '700px',
      confirmButtonText: 'Cool!'
    });
  });

