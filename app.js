    let icon = document.querySelector('.fa-bell');

    icon.onclick = function() {
      if (icon.classList.contains('fa-bell')) {
        icon.classList.replace('fa-bell', 'fa-check');
      } else {
        icon.classList.replace('fa-check', 'fa-bell');
            }
    icon.style.color = '#cbcaca';
    }
    
 
 