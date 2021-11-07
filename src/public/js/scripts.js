(function() {
  async function upload(file) {
    let formData = new FormData();
    formData.append("file", file);
    await fetch('/transactions/save', {
      method: 'POST',
      body: formData
    })
  }

  const file = document.getElementById("file");

  file.addEventListener('change', (e) => {
    const file = e.target.files[0];
    upload(file);
  })

})()