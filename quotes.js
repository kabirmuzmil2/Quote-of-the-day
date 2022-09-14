let rando = Math.floor(Math.random()*22);
let quotarr=[ "“It is hard to fail but it is worse never to have tried to succeed.” —Theodore Roosevelt","“The future belongs to those who believe in the beauty of their dreams.” —Eleanor Roosevelt","“I hated every minute of training, but I said, Do not quit. Suffer now and live the rest of your life as a champion.’” —Muhammad Ali","“Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice.” —Wayne Dyer","“The greater damage for most of us is not that our aim is too high and we miss it, but that it it too low and we reach it.” —Michelangelo","Success is not final, failure is not fatal: it is the courage to continue that counts. —Winston Churchill","“When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.” —Henry Ford","“It is not a lack of love, but a lack of friendship that makes unhappy marriages.” —Friedrich Nietzsche","“Love is that condition in which the happiness of another person is essential to your own.” —Robert A. Heinlein","You know it’s love when all you want is that person to be happy, even if you’re not part of their happiness. —Julia Roberts","“To be brave is to love someone unconditionally, without expecting anything in return.” —Madonna","“You can’t blame gravity for falling in love.” —Albert Einstein”","“The most important thing is to try and inspire people so that they can be great in whatever they want to do.” —Kobe Bryant","“If you look at what you have in life, you’ll always have more.” —Oprah Winfrey","“Yesterday is not ours to recover, but tomorrow is ours to win or lose.” —Lyndon B. Johnson","“Believe you can and you’re halfway there.” —Theodore Roosevelt","“You are never too old to set another goal or to dream a new dream.” —C.S. Lewis","“The most wasted of days is one without laughter.”  —E. E. Cummings","“Happiness often sneaks in through a door you didn’t know you left open.” —John Barrymore","“Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.” —Mark Twain","“You must be the change you wish to see in the world.” —Mahatma Gandhi","“Life is not measured by the number of breaths we take, but by the moments that take our breath away.” —Maya Angelou"]


console.log(quotarr.length);
console.log(rando);
console.log(quotarr[rando]);

document.getElementById('line').textContent = quotarr[rando];


function next(){
   return location.reload();
}

