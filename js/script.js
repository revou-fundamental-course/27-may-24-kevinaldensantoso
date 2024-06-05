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

