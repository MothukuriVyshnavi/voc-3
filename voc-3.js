function verifyStudent() {
  const id = document.getElementById('identifier').value.trim();
  const spinner = document.getElementById('spinner');
  const result = document.getElementById('result');

  result.innerHTML = '';
  spinner.classList.remove('hidden');

  setTimeout(() => {
    spinner.classList.add('hidden');

    if (!id) {
      showToast("Please enter a valid ID or email.");
      return;
    }

    if (id.toLowerCase().includes("test")) {
      result.innerHTML = `<p style="color:green;"><strong>✅ Verified:</strong> Certificate exists for ${id}</p>`;
    } else {
      result.innerHTML = `<p style="color:red;"><strong>❌ Not Found:</strong> No certificate matches ${id}</p>`;
    }
  }, 2000);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}