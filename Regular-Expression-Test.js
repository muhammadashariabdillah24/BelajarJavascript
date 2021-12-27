function panggilRegex() {
    
    let data = 'Aku adalah seorang santri'

    console.log(/seorang/.test(data));
    // true
    // Dikarenakan ada sebuah kata "seorang" pada variable data

    console.log(/dia/.global);
    // false
    // Dikarenakan tidak ada data "dia" di dalam variable data

}

panggilRegex()