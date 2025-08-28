// ================================
// Gestion des boutons accessibles
// ================================
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('keyup', e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      button.click();
    }
  });
});

// ================================
// Focus visible pour les liens
// ================================
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('focus', () => {
    link.style.outline = '3px solid #ffd700';
  });
  link.addEventListener('blur', () => {
    link.style.outline = 'none';
  });
});

// ================================
// Alerte accessible
// ================================
function accessibleAlert(message){
  let alertBox = document.getElementById('accessible-alert');
  if(!alertBox){
    alertBox = document.createElement('div');
    alertBox.id = 'accessible-alert';
    alertBox.setAttribute('role','alert');
    alertBox.style.position = 'absolute';
    alertBox.style.left = '-9999px';
    document.body.appendChild(alertBox);
  }
  alertBox.textContent = message;
}

// Exemples de boutons alert
document.querySelectorAll('.alert-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    accessibleAlert('Action réussie !');
    alert('Action réussie !');
  });
});
