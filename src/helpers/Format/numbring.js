if (!Number.hasOwnProperty("numbring"))
    Number.prototype.numbring = function (decimals = 0){
        const numbring = new Intl.NumberFormat(navigator.language);

        return numbring.format(this);
    }