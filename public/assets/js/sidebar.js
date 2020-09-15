const sidebar = document.querySelector('#sidebar');
const sidebarCollapse = document.querySelector('#sidebarCollapse');


sidebarCollapse.addEventListener('click', () => {
    if (sidebar.classList === '') {
        sidebar.classList.add('active');
    } else {
        sidebar.classList.remove('active');
    }
});