document.getElementById('addSubject').addEventListener('click', () => {
    const container = document.getElementById('marksContainer');
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Enter marks';
    input.required = true;
    container.appendChild(input);
  });
  
  document.getElementById('marksForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const inputs = document.querySelectorAll('#marksContainer input');
    let total = 0;
  
    inputs.forEach(input => {
      total += parseFloat(input.value) || 0;
    });
  
    const percentage = total / inputs.length;
    let grade = '';
  
    if (percentage >= 90) grade = 'O';
    else if (percentage >= 80) grade = 'A';
    else if (percentage >= 70) grade = 'B';
    else if (percentage >= 60) grade = 'C';
    else if (percentage >= 50) grade = 'D';
    else if (percentage >= 40) grade = 'E';
    else grade = 'Fail';
  
    document.getElementById('resultBox').innerHTML = `
      <p><strong>Total Marks:</strong> ${total}</p>
      <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
      <p><strong>Grade:</strong> ${grade}</p>
    `;
  });
  