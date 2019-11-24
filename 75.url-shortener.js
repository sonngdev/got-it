class UrlShortener {
  constructor() {
    this.id = 10000000000;
    this.shortened = {};
  }

  shorten(url) {
    if (url in this.shortened) return this.shortened[url];

    const shortened = `short.url/${this.encode(this.id)}`;
    this.shortened[url] = shortened;
    this.id++;

    return shortened;
  }

  encode(num) {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const base = chars.length;

    let encoded = '';
    while (num > 0) {
      const i = num % base;
      encoded = chars[i] + encoded;
      num = Math.floor(num / base);
    }

    return encoded;
  }
}

const shortener = new UrlShortener();
console.log(shortener.shorten('google.com'));
console.log(shortener.shorten('google.com'));
console.log(shortener.shorten('gooooooooooooogle.com'));
console.log(shortener.shorten('facebook.com'));
