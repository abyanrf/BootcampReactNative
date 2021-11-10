const myPromise = new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    resolve('timer completed')
  },1000)
})
.then((text)=>{throw new Error('failed')})
.catch(err => console.log(err))
.then(()=>console.log('dos ?'))