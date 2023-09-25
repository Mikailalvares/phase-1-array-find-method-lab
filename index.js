const { expect } = require('chai'); 

function superbowlWin(record) {
  const winRecord = record.find(entry => entry.result === "W");
  return winRecord ? winRecord.year : undefined;
}

describe('superbowlWin', function () {
  it('returns the year the Denver Broncos won the superbowl', function () {
    const record = [
      { year: '2015', result: 'W' },
      { year: '2016', result: 'L' },
    
    ];
    const result = superbowlWin(record);
    expect(result).to.equal('2015');
  });

  it('returns undefined if the record has no win objects', function () {
    const sadReality = [
      { year: '2016', result: 'L' },
      { year: '2017', result: 'L' },
      { year: '2018', result: 'L' }
    ];
    const result = superbowlWin(sadReality);
    expect(result).to.be.undefined; 
  });
});
