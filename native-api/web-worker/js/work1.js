

self.addEventListener('message', function (e) {
        console.log('Worker1--->', e.data );
        sleep('3000').then(() => {
          this.postMessage('done1123123');
        })
  }, false);

  
  function sleep ( t ) {
    return  new Promise( resolve => {
      setTimeout(() => {
          resolve();
      }, t);
    })
  };