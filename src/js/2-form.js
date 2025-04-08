const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email?.trim() || '';
    formData.message = parsedData.message?.trim() || '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  } catch (error) {
    console.warn('Cannot parse saved form data:', error);
  }
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name in formData) {
    formData[name] = value.trim(); // прибираємо пробіли по краях
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(STORAGE_KEY);

  formData.email = '';
  formData.message = '';
  form.reset();
});
