// Variabel global untuk menyimpan mode dan jenis perhitungan
let modeSekarang = '';
let perhitunganSekarang = '';

// Menampilkan submenu berdasarkan pilihan pengguna
function tampilkanMenu(mode) {
    modeSekarang = mode;
    document.getElementById('judul-submenu').innerText = mode.toUpperCase();
    document.getElementById('submenu').classList.remove('d-none');
    document.getElementById('form-container').classList.add('d-none');
    document.getElementById('kalkulator').classList.add('d-none');
}

// Menampilkan form input sesuai dengan jenis perhitungan yang dipilih
function tampilkanForm(jenis) {
    perhitunganSekarang = jenis;
    document.getElementById('form-container').classList.remove('d-none');
    document.getElementById('judul-form').innerText = `Hitung ${jenis.toUpperCase()}`;
    
    const kolomInput = {
        'a': ['Un', 'n', 'b/r'],
        'br': ['a', 'Un', 'n'],
        'un': ['a', 'b/r', 'n'],
        'sn': ['a', 'b/r', 'n']
    };
    
    document.getElementById('inputan').innerHTML = kolomInput[jenis]
        .map(id => `<input type="number" id="${id.toLowerCase()}" class="form-control mb-2" placeholder="Masukkan ${id}">`)
        .join('');
}

// Fungsi perhitungan berdasarkan jenis deret
function hitung() {
    const a = parseFloat(document.getElementById('a')?.value) || 0;
    const b_r = parseFloat(document.getElementById('b/r')?.value) || 0;
    const n = parseFloat(document.getElementById('n')?.value) || 0;
    const un = parseFloat(document.getElementById('un')?.value) || 0;
    let hasil = '';

    if (modeSekarang === 'aritmatika') {
        if (perhitunganSekarang === 'a') hasil = un - (n - 1) * b_r;
        if (perhitunganSekarang === 'br') hasil = (un - a) / (n - 1);
        if (perhitunganSekarang === 'un') hasil = a + (n - 1) * b_r;
        if (perhitunganSekarang === 'sn') hasil = (n / 2) * (2 * a + (n - 1) * b_r);
    } else if (modeSekarang === 'geometri') {
        if (perhitunganSekarang === 'a') hasil = un / (b_r ** (n - 1));
        if (perhitunganSekarang === 'br') hasil = Math.pow(un / a, 1 / (n - 1));
        if (perhitunganSekarang === 'un') hasil = a * (b_r ** (n - 1));
        if (perhitunganSekarang === 'sn') hasil = a * ((1 - b_r ** n) / (1 - b_r));
    } else if (modeSekarang === 'takHingga') {
        if (perhitunganSekarang === 'sn') hasil = a / (1 - b_r);
    }

    document.getElementById('hasil').innerText = `Hasil: ${hasil}`;
}

// Menampilkan kalkulator sederhana
function tampilkanKalkulator() {
    document.getElementById('submenu').classList.add('d-none');
    document.getElementById('form-container').classList.add('d-none');
    document.getElementById('kalkulator').classList.remove('d-none');
}

// Fungsi kalkulator sederhana
function hitungKalkulator() {
    const angka1 = parseFloat(document.getElementById('angka1').value) || 0;
    const angka2 = parseFloat(document.getElementById('angka2').value) || 0;
    const operator = document.getElementById('operator').value;
    let hasil = 0;

    if (operator === '+') hasil = angka1 + angka2;
    if (operator === '-') hasil = angka1 - angka2;
    if (operator === '*') hasil = angka1 * angka2;
    if (operator === '/') hasil = angka2 !== 0 ? angka1 / angka2 : 'Tidak bisa dibagi nol';

    document.getElementById('hasil-kalkulator').innerText = `Hasil: ${hasil}`;
}
