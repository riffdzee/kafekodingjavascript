//soal no. 1
const sekolah = {
    kepalaskolah: {
        nip: "123123123",
        nama: "Arief Muhammad",
        noHP: "081208120812",
        alamat: {
            jalan: "Jl. Pendidikan No. 1",
            kota: "Padang",
            provinsi: "Sumatera Barat"
        }
    },
    guru: {
        nip: "987987987",
        nama: "Teguh Prasetyo",
        noHP: "082112800821",
        alamat: {
            jalan: "Jl. Kebangkitan No. 2",
            kota: "Padang",
            provinsi: "Sumatera Barat"
        }
    },
    siswa: {
        kelasA: [
            {
                nis: "101",
                nama: "Fisyaiful Amir",
                noHP: "081551800815",
                alamat: {
                    jalan: "Jl. Melati No. 3",
                    kota: "Padang",
                    provinsi: "Sumatera Barat"
                }
            },
            {
                nis: "102",
                nama: "Savira Alifa Sjahril",
                noHP: "086006800860",
                alamat: {
                    jalan: "Jl. Kenanga No. 4",
                    kota: "Padang",
                    provinsi: "Sumatera Barat"
                }
            }
        ],
        kelasB: [
            {
                nis: "201",
                nama: "Lando Norris",
                noHP: "080404080804",
                alamat: {
                    jalan: "Jl. Anggrek No. 5",
                    kota: "Padang",
                    provinsi: "Sumatera Barat"
                }
            },
            {
                nis: "202",
                nama: "Paige Bueckers",
                noHP: "085508550855",
                alamat: {
                    jalan: "Jl. Mawar No. 6",
                    kota: "Padang",
                    provinsi: "Sumatera Barat"
                }
            }
        ]
    }
};

console.log(sekolah);

//soal no. 2
let hasil = "";
for (a=0; a<=5; a++){
    for(b=1; b<=a; b++){
        hasil += "* ";
    }hasil += "\n";
}console.log(hasil)

//soal no. 3
for(a=1;a<=20;a++){
    if (a % 4 == 0 && a % 5 == 0){
    console.log("Hebat Luar Biasa");
    }else if (a % 5 == 0){
        console.log("Hebat");
    }else if (a % 4 == 0){
        console.log("Luar Biasa");
    }else{
        console.log("Biasa");
    }
}console.log("\n")

//soal no. 4
const film = ['Avengers','Mr. Bean','Top Gun : Maverick',['Action','Comedy','Military']];
console.log('Ini adalah film favorit saya, yang pertama adalah '+film[2]+' dengan genre '+film[3][0]+' dan '+film[3][2]+', lalu yang kedua adalah '+film[1]+' dengan genre '+film[3][1]);
console.log("\n")

//soal no. 5
function hitunggaji() {
    const gaji = 3000000;
    const tunjangan = 800000;
    const bonus = 500000; 
    const jumlahmapel = 10; 
    const lamakerja = 5;

    const totalgaji = gaji * 12 * lamakerja;
    const totaltunjangan = tunjangan * lamakerja;
    const totalbonus = bonus * jumlahmapel;

    const gajibersih = totalgaji + totaltunjangan + totalbonus;

    console.log(`Gaji bersih Anda selama ${lamakerja} tahun adalah Rp. ${gajibersih},-.`);
}

hitunggaji();