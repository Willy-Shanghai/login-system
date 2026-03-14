const form = document.getElementById('loginForm');
const messageEl = document.getElementById('message');

function showMessage(text, type='error'){
  messageEl.textContent = text;
  messageEl.className = 'message ' + (type === 'success' ? 'success' : 'error');
}

form.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  messageEl.textContent = '';

  const email = form.email.value.trim();
  const password = form.password.value;

  if(!email){ showMessage('Email is required'); return; }
  if(password.length < 8){ showMessage('Password must be at least 8 characters'); return; }

  // Attempt server login
  try{
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if(res.ok && data.ok){
      // store user and redirect to dashboard
      try{ localStorage.setItem('user', JSON.stringify(data.user || {})); } catch(e){/* ignore */}
      window.location.href = '/main.html';
    } else {
      showMessage(data?.message || 'Invalid credentials');
    }
  } catch (err) {
    // Network error — fallback mock for local testing
    console.warn('Server unreachable, using local fallback', err);
    if(email === 'user@example.com' && password === 'password123'){
      try{ localStorage.setItem('user', JSON.stringify({ email: 'user@example.com', name: 'Demo User' })); } catch(e){}
      window.location.href = '/main.html';
    } else {
      showMessage('Server unreachable and credentials did not match local test user');
    }
  }
});
