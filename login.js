const studentBtn = document.getElementById('student-btn');
const teacherBtn = document.getElementById('teacher-btn');
const studentForm = document.getElementById('student-form');
const teacherForm = document.getElementById('teacher-form');
const studentRegisterBtn = document.getElementById('student-register-btn');
const studentRegisterForm = document.getElementById('student-register-form');
const studentRegisterSubmit = document.getElementById('student-register-submit');
const backOptions = document.querySelectorAll('.back-option');

// Show Student Login
studentBtn.addEventListener('click', () => {
  studentForm.style.display = 'flex';
  teacherForm.style.display = 'none';
  studentRegisterForm.style.display = 'none';
  document.querySelector('.login-options').style.display = 'none';
});

// Show Teacher Login
teacherBtn.addEventListener('click', () => {
  teacherForm.style.display = 'flex';
  studentForm.style.display = 'none';
  studentRegisterForm.style.display = 'none';
  document.querySelector('.login-options').style.display = 'none';
});

// Show Student Registration Form
studentRegisterBtn.addEventListener('click', () => {
  studentRegisterForm.style.display = 'flex';
  studentForm.style.display = 'none';
});

// Go Back functionality
backOptions.forEach(option => {
  option.addEventListener('click', (e) => {
    const parentForm = e.target.closest('form');
    if (parentForm === studentRegisterForm) {
      studentRegisterForm.style.display = 'none';
      studentForm.style.display = 'flex';
    } else if (parentForm === studentForm) {
      studentForm.style.display = 'none';
      document.querySelector('.login-options').style.display = 'block';
    } else if (parentForm === teacherForm) {
      teacherForm.style.display = 'none';
      document.querySelector('.login-options').style.display = 'block';
    }
  });
});

// Handle Student Registration Submit
studentRegisterSubmit.addEventListener('click', () => {
  const inputs = studentRegisterForm.querySelectorAll('input');
  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const password = inputs[2].value;
  const confirmPassword = inputs[3].value;

  if (!name || !email || !password || !confirmPassword) {
    alert('Please fill in all fields!');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  alert(`Registration Successful!\nName: ${name}\nEmail: ${email}`);
  inputs.forEach(input => input.value = '');
  studentRegisterForm.style.display = 'none';
  studentForm.style.display = 'flex';
});