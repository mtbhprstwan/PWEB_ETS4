// Validasi Form dengan JavaScript
document.getElementById('memberForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default
    
    // Ambil nilai dari input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const postalcode = document.getElementById('postalcode').value.trim();
    const gender = document.getElementById('gender').value;

    // Elemen untuk pesan error
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.color = 'red';
    
    // Pola regex untuk validasi email, nomor telepon, dan kode pos
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^[0-9]{10,15}$/;
    const postalcodePattern = /^[0-9]{5}$/;

    // Validasi input
    if (name === '') {
        errorMessage.textContent = 'Nama lengkap harus diisi.';
        return;
    }

    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Email tidak valid.';
        return;
    }

    if (!phonePattern.test(phone)) {
        errorMessage.textContent = 'Nomor telepon harus berupa angka dan panjangnya 10-15 digit.';
        return;
    }

    if (address === '') {
        errorMessage.textContent = 'Alamat harus diisi.';
        return;
    }

    if (!postalcodePattern.test(postalcode)) {
        errorMessage.textContent = 'Kode pos harus 5 digit.';
        return;
    }

    if (gender === '') {
        errorMessage.textContent = 'Pilih jenis kelamin.';
        return;
    }
    
    // Jika semua valid, kirim form atau lakukan aksi lain
    errorMessage.style.color = 'green';
    errorMessage.textContent = 'Pendaftaran berhasil!';
    
    // Jika ingin form benar-benar dikirim, uncomment baris di bawah ini:
    // this.submit();
});
