const form = document.querySelector('.form');

const refs = {
    delayInput: form.querySelector('[name="delay"]'),
    stepInput: form.querySelector('[name="step"]'),
    amountInput: form.querySelector('[name="amount"]'),
  };

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  const delay = parseInt(refs.delayInput.value);
  const step = parseInt(refs.stepInput.value);
  const amount = parseInt(refs.amountInput.value);

  const promises = [];

  for (let i = 1; i <= amount; i++) {
    const position = i;
    const currentDelay = delay + (i - 1) * step;
    
    const promise = createPromise(position, currentDelay)
      .then(result => {
        console.log(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
      })
      .catch(error => {
        console.log(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
      });

    promises.push(promise);
  }});