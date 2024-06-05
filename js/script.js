function replaceName() {
    let user = prompt ("Halo, siapakah nama Anda?", "");
    document.getElementById("user").innerHTML = user
}

replaceName();

document.getElementById('changename').addEventListener("click", function(){}); {
    replaceName();
}

document.getElementById('submit').addEventListener("click", function(){}); {
    const nama = nameInput.value 

    if (nama == "") {
        document.getElementById(error-name).innerHTML = "Nama tidak boleh kosong!"
    } else {
    document.getElementById('nama').innerHTML = nama
}}

function validateForm() {
    const nama= document.forms['contact-us-section']['nama'].value;
    const angka = 11
    if (nama=='') {
        document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong!"
        return false
    }

    setName(nama)
    return false

    const tgl_lahir= document.forms['contact-us-section']['tgl_lahir'].value;
    if (tgl_lahir=='') {
        document.getElementById("error-name").innerHTML = "Tanggal lahir tidak boleh kosong!"
        return false
    }
  
    const message= document.forms['contact-us-section']['message'].value;
    if (message=='') {
        document.getElementById("error-name").innerHTML = "Pesan tidak boleh kosong!"
        return false
    }
}

function setName(Nama) {
    document.getElementById("nama").innerHTML = nama;
    document.getElementById("error-name").innerHTML = ""
}

function fromValidation() {
    let nama = document.getElementById('nama').value
    if (nama == null || nama == '') {
        alert('Input kosong');
    } else {
        console.log(nama)
    }
}

document.getElementsByClassName('contact-us-section').addEventListener('submit', function(event){}); { 
    event.preventDefault();

        // Membuat Tanggal
        const now = new Date
        const dateTimeString = now.toLocaleDateString();

        // Ambil nilai dari formulir
        const nama = document.getElementById('nama').value;
        const tgl_lahir = document.getElementById('tgl_lahir').value;
        const jenis_kelamin = document.querySelector('input[name="jeniskelamin"] :checked').value;
        const message = document.getElementById('message').value;

        // Teks hasil input
        const resultText = `Date/time: $(dateTimeString)\n \nName: ${nama}\Birthdate: ${tgl_lahir}\r`

        // Tampilkan hasil input di area text
        document.getElementById ('result').value = resultText;

        // Pesan konfirmasi
        alert('Pesan telah disampaikan.').value = "";
        document.getElementById('nama').value = "";
        document.getElementById('tgl_lahir').value = "";
        document.getElementById('message').value = "";

}
        

