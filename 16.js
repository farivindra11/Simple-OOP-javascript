class Car {
    constructor(mesin, warna, pintu, merkban, tahun, garansi) {
        this.mesin = mesin;
        this.pintu = pintu;
        this.warna = warna;
        this.ban = new Tyre(merkban);
        this.tahun = tahun;
        this.garansi = garansi;

    }
}

class Tyre {
    constructor(merk) {
        this.merk = merk;
    }
}

class Mobilio extends Car {
    constructor(tahun) {
        super('1500cc', 'silver', 4, 'Dunlop', tahun)
        this.garansi = 3;
        this.type = 'Honda Mobilio';
    }
}

class Avanza extends Car {
    constructor(tahun) {
        super('1300cc', 'hitam', 4, 'Achilles', tahun)
        this.garansi = 5;
        this.type = 'Toyota Avanza';
    }
}

class Pajero extends Car {
    constructor(tahun) {
        super('2500cc', 'putih', 4, 'Bridgestone', tahun)
        this.garansi = 5;
        this.type = 'Mitsubishi Pajero Sport'
    }
}

class CarFactory {
    constructor() {
        this.cars = []
    }

    static acak() {
        return Math.floor(Math.random() * 9)
    }

    produksi(tahun) {
        for (let i = 0; i < CarFactory.acak(); i++) {
            this.cars.push(new Mobilio(tahun))
        }
        for (let i = 0; i < CarFactory.acak(); i++) {
            this.cars.push(new Avanza(tahun))
        }
        for (let i = 0; i < CarFactory.acak(); i++) {
            this.cars.push(new Pajero(tahun))
        }
    }

    warranty(year) {
        console.log(`Daftar mobil yang telah di produksi: `);
        this.cars.forEach(content => {
            console.log(`
            Nama Mobil: ${content.type}
            Warna: ${content.warna}
            Kapasitas Mesin: ${content.mesin}
            Jumlah Pintu: ${content.pintu}
            Merk Ban: ${content.ban.merk}
            Tahun Pembuatan: ${content.tahun}
            Garansi : ${content.garansi} Tahun
            Masa berlaku garansi: ${(year - content.tahun) > content.garansi ? 'Tidak berlaku' : 'Masih berlaku'}
            ===================================
            `)
        })
    }
}

let pabrik = new CarFactory();

pabrik.produksi(2017);
pabrik.warranty(2021);