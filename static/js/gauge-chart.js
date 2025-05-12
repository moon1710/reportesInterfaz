const ctx = document.getElementById('gaugeChart').getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{ data: [{{ gauge_value }}, 100 - {{ gauge_value }}] }]
  },
  options: { cutout: '80%', plugins: { tooltip: { enabled: false } } }
});