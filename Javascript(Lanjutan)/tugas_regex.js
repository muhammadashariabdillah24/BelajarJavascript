function panggilRegex() {
    let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z"

    console.log(

        str.match(/[c]/gi),
        str.match(/[k]/gi),
        str.match(/[l]/gi),
    
    );
}

panggilRegex()