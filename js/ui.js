//toast message
function showToast(message, type = 'success') {
  let toastWrap = document.querySelector('.toast-wrap');

  if (!toastWrap) {
    toastWrap = document.createElement('div');
    toastWrap.className = 'toast-wrap';
    document.body.append(toastWrap);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const text = document.createElement('span');
  text.textContent = message;

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'toast-x';
  closeButton.setAttribute('aria-label', 'Dismiss');
  closeButton.textContent = 'x';

  function dismissToast() {
    if (!toast.isConnected) {
      return;
    }
    toast.classList.add('leaving');

    setTimeout(function () {
      toast.remove();

      if (toastWrap.children.length == 0) {
        toastWrap.remove();
      }
    }, 300);
  }

  closeButton.addEventListener('click', dismissToast);
  toast.append(text, closeButton);
  toastWrap.append(toast);

  setTimeout(dismissToast, 3000);
}

//form error
function showError(inputId, message) {
  const input = document.getElementById(inputId);
  const errorElement = document.getElementById(inputId + 'Err');

  if (!input || !errorElement) {
    return;
  }

  input.classList.add('input-error');
  errorElement.textContent = message;
  errorElement.classList.add('show');
}

function clearErrors() {
  const inputs = document.querySelectorAll('.input');
  const errorElements = document.querySelectorAll('.error-text');

  for (const input of inputs) {
    input.classList.remove('input-error');
  }

  for (const errorElement of errorElements) {
    errorElement.textContent = '';
    errorElement.classList.remove('show');
  }
}

function clearErrorOnInput(form) {
  if (!form) {
    return;
  }

  form.addEventListener('input', function (event) {
    const field = event.target;

    if (!field.id) {
      return;
    }

    field.classList.remove('input-error');

    const errorElement = document.getElementById(field.id + 'Err');

    if (errorElement) {
      errorElement.textContent = '';
      errorElement.classList.remove('show');
    }
  });
}

//formting
function formatMoney(value) {
  return `$${Number(value).toLocaleString('en-US')}`;
}
