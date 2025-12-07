const path = require('path')
const fs = require('fs')

function fromDir(startPath, filter, callback) {

    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter, callback); //recurse
        } else if (filter.test(filename)) callback(filename);
    };
};

fromDir('public/photos', /\.jpeg$/, function(filename) {
    const focus = filename.split('_').pop();
    const isHugo = focus.startsWith('hu');

    if (isHugo)
        console.log('-- ignored: ', filename);
    else {
        fs.unlinkSync(filename);
        console.log('-- removed: ', filename);
    }
});