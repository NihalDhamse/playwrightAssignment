const fs=require('fs');
const file='./testData.json';
module.exports={
  save(k,v){
    let d={}; if(fs.existsSync(file)) d=JSON.parse(fs.readFileSync(file));
    d[k]=v; fs.writeFileSync(file,JSON.stringify(d,null,2));
  },
  get(k){const d=JSON.parse(fs.readFileSync(file)); return d[k];}
};
