for (let a = 0; a <= 20; a++) {
    
    for (let b = 0; b <= 20; b++) {
        if (b % 5 == 0 && a % 2 == 0) {
            document.write(' * ')
        } else {
            document.write(' _ ')
        }
    }

    document.write('<br>')
}