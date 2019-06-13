'use strict';

function promptDisk(diskNum, cbFn) {
    console.log(`Please insert disk ${diskNum}`);
    setTimeout(function () {
        cbFn(diskNum);
    }, 1000);
}

function install(diskNum, cbFn) {
    console.log(`Install from disk ${diskNum}`);
    setTimeout(function () {
        cbFn(diskNum + 1);
    }, 1000);
}

function main() {
    promptDisk(1, function (diskNum) {
        install(diskNum, function (diskNum) {
            promptDisk(diskNum, function (diskNum) {
                install(diskNum, function (diskNum) {
                    promptDisk(diskNum, function (diskNum) {
                        install(diskNum, function (diskNum) {

                            promptDisk(diskNum, function (diskNum) {
                                install(diskNum, function (diskNum) {
                                    console.log('Finish')
                                });
                            });
                        });
                    });

                });
            });
        });
    });
}

/*function promptDiskPromise(diskNum) {
    return new Promise(function (resolve, reject) {
        console.log(`Please insert disk ${diskNum}`);
        setTimeout(function () {
            resolve(diskNum);
        }, 1000);
    });
}

function installPromise(diskNum) {
    return new Promise(function (resolve, reject) {
        console.log(`Install from disk ${diskNum}`);
        setTimeout(function () {
            resolve(diskNum + 1);
        }, 1000);
    });
}*/

async function promptDiskPromise(diskNum) {
    console.log(`Please insert disk ${diskNum}`);
    await sleep(1);
    return diskNum;
}

async function installPromise(diskNum) {
    console.log(`Install from disk ${diskNum}`);
    await sleep(1);
    return diskNum + 1;
}

function sleep(sec) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, sec * 1000);
    });
}

function mainPromise() {
    promptDiskPromise(1)
        .then(installPromise)
        .then(promptDiskPromise)
        .then(installPromise)
        .then(promptDiskPromise)
        .then(installPromise)
        .then(promptDiskPromise)
        .then(function () {
            console.log('Finish')
        })
}

async function asyncMain() {
    /*let diskNum = await promptDiskPromise(1);
    diskNum = await installPromise(diskNum);
    diskNum = await promptDiskPromise(diskNum);
    diskNum = await installPromise(diskNum);
    diskNum = await promptDiskPromise(diskNum);
    diskNum = await installPromise(diskNum);
    diskNum = await promptDiskPromise(diskNum);
    await installPromise(diskNum);
    console.log('Finish');
    return 656;*/
    const N = 6;

    for (let disk = 1; disk <= N;) {
        await promptDiskPromise(disk);
        disk = await installPromise(disk);
    }
    console.log('Finish');

}

asyncMain();


//mainPromise();
//main();




