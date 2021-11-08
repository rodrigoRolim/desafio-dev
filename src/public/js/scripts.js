(function() {
  async function upload(file) {

    let formData = new FormData();
    formData.append("file", file, "cnab.txt");
    try {

      await fetch('/transactions/save', {
        method: 'POST',
        body: formData
      });
      alert("upload realizado com sucesso");
    } catch (err) {
      console.error(err)
    }
 
  }

  const file = document.getElementById("file");

  file.addEventListener('change', function (e) {
    const file = e.target.files[0];
    upload(file);
  })

})()