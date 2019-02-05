let mixedMenu = {
    iso: 1,
    appreture: 2,
    shutter: 1
};

const bankResult = [
    {
        id: 0,
        iso: 1,
        appreture: 1,
        shutter: 1
    },
    {
        id: 1,
        iso: 1,
        appreture: 2,
        shutter: 1
    }
];

function mix() {
    for (let i = 0; i < bankResult.length; i++) {
        if (mixedMenu.iso === bankResult[i].iso &&
            mixedMenu.appreture === bankResult[i].appreture &&
            mixedMenu.shutter === bankResult[i].shutter) {
                return bankResult[i].id;
            } else {
                alert ('input out of range');
            }
    }
}