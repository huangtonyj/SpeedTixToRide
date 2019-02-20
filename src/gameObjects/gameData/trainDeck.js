const TRAINCARDS = [];
const TRAINCOLORS = ['pink', 'white', 'blue', 'yellow', 'orange', 'black', 'red', 'green'];
const COLOREDCARDCOUNT = 12;
const WILDCARDCOUNT = 14;

TRAINCOLORS.forEach(color => {
  for (let i = 0; i < COLOREDCARDCOUNT; i++) {
    TRAINCARDS.push(color);
  }
})

for (let i = 0; i < WILDCARDCOUNT; i++) {
  TRAINCARDS.push('wild');
}

module.exports = TRAINCARDS;