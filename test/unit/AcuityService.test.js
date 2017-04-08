let expect = require('chai').expect;
let calculateAcuityScore = require("../../assets/js/services/AcuityService.js").score;
let calculateAcuityRec = require("../../assets/js/services/AcuityService.js").recommendation;

describe('Calculate acuity score', () => {

  it('should handle empty requests', function () {
    let intended_score = 0;
    let intake = {};
    options = {
      "intake": intake
    };
    let calculated_score = calculateAcuityScore(options);
    let housing_recommendation = calculateAcuityRec(calculated_score);
    expect(calculated_score).to.be.a('number');
    expect(calculated_score).to.equal(intended_score);
    expect(housing_recommendation)
      .to.equal("Not recommended for a Housing and Support Assessment at this time");
  });

  it('should calculate the acuity score for an incomplete response set', function () {
    let intended_score = 2;
    let intake = JSON.parse('{"General_1": 67, "Social_7": true}');
    options = {
      "intake": intake
    };
    let calculated_score = calculateAcuityScore(options);
    let housing_recommendation = calculateAcuityRec(calculated_score);
    expect(calculated_score).to.be.a('number');
    expect(calculated_score).to.equal(intended_score);
    expect(housing_recommendation)
      .to.equal("Not recommended for a Housing and Support Assessment at this time");
  });

  it('should calculate the minimum VI-SPDAT score', () => {
    let intended_score = 0;
    let fs = require('fs');
    let intake = fs.readFileSync(__dirname + '/test_data/minScore.json', 'utf8');
    intake = JSON.parse(intake);
    options = {
      "intake": intake
    };
    let calculated_score = calculateAcuityScore(options);
    let housing_recommendation = calculateAcuityRec(calculated_score);
    expect(calculated_score).to.be.a('number');
    expect(calculated_score).to.equal(intended_score);
    expect(housing_recommendation)
      .to.equal("Not recommended for a Housing and Support Assessment at this time");
  });

  it('should calculate the maximum VI-SPDAT score', () => {
    let intended_score = 20;
    let fs = require('fs');
    let intake = fs.readFileSync(__dirname + '/test_data/maxScore.json', 'utf8');
    intake = JSON.parse(intake);
    options = {
      "intake": intake
    };
    let calculated_score = calculateAcuityScore(options);
    let housing_recommendation = calculateAcuityRec(calculated_score);
    expect(calculated_score).to.be.a('number');
    expect(calculated_score).to.equal(intended_score);
    expect(housing_recommendation)
      .to.equal("Recommended for a Permanent Supportive Housing/Housing First Assessment");
  });

  it('should calculate a VI-SPDAT score that recommends no housing assessment', () => {
    let intended_score = 4;
    let fs = require('fs');
    let intake = fs.readFileSync(__dirname + '/test_data/noRecc.json', 'utf8');
    intake = JSON.parse(intake);
    options = {
      "intake": intake
    };
    let calculated_score = calculateAcuityScore(options);
    let housing_recommendation = calculateAcuityRec(calculated_score);
    expect(calculated_score).to.be.a('number');
    expect(calculated_score).to.equal(intended_score);
    expect(housing_recommendation)
      .to.equal("Not recommended for a Housing and Support Assessment at this time");
  });

  it('should calculate a VI-SPDAT score that recommends a rapid re-housing assessment', () => {
    let intended_score = 5;
    let fs = require('fs');
    let intake = fs.readFileSync(__dirname + '/test_data/rapidRecc.json', 'utf8');
    intake = JSON.parse(intake);
    options = {
      "intake": intake
    };
    let calculated_score = calculateAcuityScore(options);
    let housing_recommendation = calculateAcuityRec(calculated_score);
    expect(calculated_score).to.be.a('number');
    expect(calculated_score).to.equal(intended_score);
    expect(housing_recommendation)
      .to.equal("Recommended for a Rapid Re-Housing Assessment");
  });

  it('should calculate a VI-SPDAT score that recommends permanent supportive housing', () => {
    let intended_score = 12;
    let fs = require('fs');
    let intake = fs.readFileSync(__dirname + '/test_data/permRecc.json', 'utf8');
    intake = JSON.parse(intake);
    options = {
      "intake": intake
    };
    let calculated_score = calculateAcuityScore(options);
    let housing_recommendation = calculateAcuityRec(calculated_score);
    expect(calculated_score).to.be.a('number');
    expect(calculated_score).to.equal(intended_score);
    expect(housing_recommendation)
      .to.equal("Recommended for a Permanent Supportive Housing/Housing First Assessment");
  });

});
