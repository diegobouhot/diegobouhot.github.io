form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});


function validateForm(form)
{
  if(form.name.value == "") {
    form.name.classList.add("error");
    form.name.focus();
    return false;
  }

  let mailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if(!mailRE.test(form.email.value)) {
    form.email.classList.add("error");
    form.email.focus();
    return false;
  }

  if(form.comments.value == "") {
    form.textarea.classList.add("error");
    form.comments.focus();
    return false;
  }

  return form.submit();
}



