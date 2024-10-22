document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('categoryFilter');
    const sessionTypeFilter = document.getElementById('sessionTypeFilter');
    const counselorList = document.getElementById('counselorList');
  
    function filterCounselors() {
      const selectedCategory = categoryFilter.value;
      const selectedSession = sessionTypeFilter.value;
      const counselors = counselorList.querySelectorAll('.counseling-card');
  
      counselors.forEach((counselor) => {
        const matchesCategory = selectedCategory === 'all' || counselor.dataset.category === selectedCategory;
        const matchesSession = selectedSession === 'all' || counselor.dataset.session === selectedSession;
  
        if (matchesCategory && matchesSession) {
          counselor.style.display = 'block';
        } else {
          counselor.style.display = 'none';
        }
      });
    }
  
    categoryFilter.addEventListener('change', filterCounselors);
    sessionTypeFilter.addEventListener('change', filterCounselors);
  });
  