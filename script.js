// your code here
const nameInput = document.getElementById('name');
    const yearInput = document.getElementById('year');
    const urlText = document.getElementById('url');
    const generateButton = document.getElementById('button');
    
    generateButton.addEventListener('click', function() {
      const name = nameInput.value;
      const year = yearInput.value;
      const queryString = `?name=${name}&year=${year}`;
      urlText.textContent = `https://localhost:8080/${queryString}`;
    });