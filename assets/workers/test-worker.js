
const module = {};
    

module.exports = {
  calculatePrimes(iterations = 500, multiplier = 1000000000) {
    var primes = [];
    for (var i = 0; i < iterations; i++) {
      var candidate = i * (multiplier * Math.random());
      var isPrime = true;
      for (var c = 2; c <= Math.sqrt(candidate); ++c) {
        if (candidate % c === 0) {
            // not prime
            isPrime = false;
            break;
         }
      }
      if (isPrime) {
        primes.push(candidate);
      }
    }
    return primes;
  }
}

self.addEventListener('message', async ({ data: { id, method, params } }) => {
  try {
    const result = await module.exports[method](...params)
    self.postMessage({
      jsonrpc: '2.0',
      id,
      result
    })
  } catch (e) {
    self.postMessage({
      jsonrpc: '2.0',
      id,
      error: {
        message: e.message,
        data: e.stack
      }
    })
  }
  
})