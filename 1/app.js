var fs = require('fs');
const path=require('path');
const { setFlagsFromString } = require('v8');
const folder=process.argv[2];
if(!folder||fs.existsSync(workingDir)){
    console.error('plz enter foler name in picture');
    return;
}
const workingDir=path.join(os.homedir(),'Pictures',folder)
console.log(workingDir);
var filePath="C:/test";

const viedoDir=path.join(workingDir,'viedo');
const capturedDir=path.join(workingDir,'captured');
const duplicatedDir=path.join(workingDir,'duplicated');

fs.mkdirSync(videoDir);
fs.mkdirSync(capturedDir);
fs.mkdirSync(duplicatedDir);

fs.promises.readdir(workingDir).then(processFoles)

})}

function processFoles(files){
    files.forEach((file)=>{
        if(isVideoFile(file)){
            console.log('video',file)
        }else if(isCapturedFile(file)){

        }else if(isDuplicatedFile(file)){

        }
    });
}



