//mengamati elemen yand dilewatkan
const observer = new IntersectionObserver((entries) => {
    //menjalankan fungsi setiap ada perubahan
    entries.forEach((entry) => {
        //ngetes aja
        console.log('tes');
        //menjalankan fungsi jika melewati kelasnya
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        //jika tidak mau terus menerus dapat di comment
        else {
            entry.target.classList.remove('show');
        }


    });
});


//Menselect semua kelas bernama hidden
const hiddenElement = document.querySelectorAll('.hidden');

hiddenElement.forEach((el) => observer.observe(el));

//memulai fungsi ketika konten dom sudah berhasil dimasukkan
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('nav ul');

    // memberi kelas showmenu kedalam <ul> yang berada di <nav> saat menekan kelas fa-bars
    //agak berbelit maaf
    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('show-menu');
    });
});