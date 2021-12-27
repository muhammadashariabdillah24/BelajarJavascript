function tugas_filter() {

    let dataNegara = [
        {
            negara: 'Indonesia',
            benua: 'Asia'
        },
        {
            negara: 'Jerman',
            benua: 'Eropa'
        },
        {
            negara: 'Spanyol',
            benua: 'Eropa'
        },
        {
            negara: 'Korea',
            benua: 'Asia'
        },
        {
            negara: 'Portugal',
            benua: 'Eropa'
        },
        {
            negara: 'Amerika Serikat',
            benua: 'Amerika'
        }

    ]

    let benuaAsia = dataNegara.filter((item) => {

        return item.benua === 'Asia'
    })

    console.log(benuaAsia);
}

tugas_filter()

// [
//     { negara: 'Indonesia', benua: 'Asia' },
//     { negara: 'Korea', benua: 'Asia' }
// ]


function tugas_filter2(params) {

    let benuaEropa = params.filter((item) => {

        return item.benua === 'Eropa'
    })

    console.log(benuaEropa);

}


let dataNegara = [
    {
        negara: 'Indonesia',
        benua: 'Asia'
    },
    {
        negara: 'Jerman',
        benua: 'Eropa'
    },
    {
        negara: 'Spanyol',
        benua: 'Eropa'
    },
    {
        negara: 'Korea',
        benua: 'Asia'
    },
    {
        negara: 'Portugal',
        benua: 'Eropa'
    },
    {
        negara: 'Amerika Serikat',
        benua: 'Amerika'
    }

]

tugas_filter2(dataNegara)

// [
//     { negara: 'Jerman', benua: 'Eropa' },
//     { negara: 'Spanyol', benua: 'Eropa' },
//     { negara: 'Portugal', benua: 'Eropa' }
// ]



// Filter Menggunakan Callback
let dataNegaraLagi = [
    {
        negara: 'Indonesia',
        benua: 'Asia'
    },
    {
        negara: 'Jerman',
        benua: 'Eropa'
    },
    {
        negara: 'Spanyol',
        benua: 'Eropa'
    },
    {
        negara: 'Korea',
        benua: 'Asia'
    },
    {
        negara: 'Portugal',
        benua: 'Eropa'
    },
    {
        negara: 'Amerika Serikat',
        benua: 'Amerika'
    }

]

function funfilter(param) {

    return param.benua == 'Eropa'
}


function tugas_filter3(params) {


    let benuaAsia = dataNegaraLagi.filter(params)

    console.log(benuaAsia);
}

tugas_filter3(funfilter)

// [
//     { negara: 'Jerman', benua: 'Eropa' },
//     { negara: 'Spanyol', benua: 'Eropa' },
//     { negara: 'Portugal', benua: 'Eropa' }
// ]
