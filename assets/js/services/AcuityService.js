"use strict";

module.exports = {

    recommendation: function(acuity_score) {
        if (acuity_score <= 4) {
            return ("Not recommended for a Housing and Support Assessment at this time");
        } else if (acuity_score > 4 && acuity_score <= 9) {
            return ("Recommended for a Rapid Re-Housing Assessment");
        } else if (acuity_score >= 10) {
            return ("Recommended for a Permanent Supportive Housing/Housing First Assessment");
        } else {
            console.error(`Unable to calculate housing recommendation for acuity score of ${acuity_score}`);
        }
    },

    score: function(options, done) {
        //console.log("Calculating acuity score");
        let surveyResult = JSON.parse(JSON.stringify(options.intake));
        let acuity_score = 0;
        let medicalCondition = false;
        let substanceUse = false;
        let mentalHealthCondition = false;

        Object.keys(surveyResult).forEach(function(key,index) {
          if (surveyResult[key]=="no"||surveyResult[key]=="refuse"){
            surveyResult[key]=null;
          }
        });

        if (surveyResult["General_1"] >= 60) {
            acuity_score++;
        }
        if (surveyResult["Housing_1"] >= 2 || surveyResult["Housing_2"] >= 4) {
            acuity_score++;
        }
        if (surveyResult["Risks_1"] +
            surveyResult["Risks_2"] +
            surveyResult["Risks_3"] +
            surveyResult["Risks_4"] +
            surveyResult["Risks_5"] >= 4) {
            acuity_score++;
        }
        if (surveyResult["Risks_6"] || surveyResult["Risks_7"]) {
            acuity_score++;
        }
        if (surveyResult["Risks_8"]) {
            acuity_score++;
        }
        if ((surveyResult["Risks_9"] || surveyResult["Risks_10"]) ||
            (typeof surveyResult["Risks_11"] !== 'undefined' && surveyResult["Risks_11"] != "Shelter")) {
            acuity_score++;
        }
        if (surveyResult["Social_1"] ||
            (typeof surveyResult["Social_2"] !== 'undefined' && !surveyResult["Social_2"]) ||
            (typeof surveyResult["Social_3"] !== 'undefined' && !surveyResult["Social_3"])) {
            acuity_score++;
        }
        if (typeof surveyResult["Social_4"] !== 'undefined' && !surveyResult["Social_4"]) {
            acuity_score++;
        }
        if (surveyResult["Social_5"] || surveyResult["Social_6"]) {
            acuity_score++;
        }
        if (surveyResult["Social_7"]) {
            acuity_score++;
        }
        if (surveyResult["Wellness_1"] == "Does not go for care") {
            acuity_score++;
        }
        if (surveyResult["Wellness_2"]) {
            acuity_score++;
            medicalCondition = true;
        }
        if (surveyResult["Wellness_3"]) {
            acuity_score++;
            medicalCondition = true;
        }
        if (surveyResult["Wellness_4"]) {
            acuity_score++;
            medicalCondition = true;
        }
        if (surveyResult["Wellness_5"]) {
            acuity_score++;
            medicalCondition = true;
        }
        if (surveyResult["Wellness_6"] ||
            surveyResult["Wellness_7"] ||
            surveyResult["Wellness_8"] ||
            surveyResult["Wellness_9"] ||
            surveyResult["Wellness_10"] ||
            surveyResult["Wellness_11"] ||
            surveyResult["Wellness_12"] ||
            surveyResult["Wellness_13"] ||
            surveyResult["Wellness_14"]) {
            medicalCondition = true;
        }
        if (surveyResult["Wellness_15"] ||
            surveyResult["Wellness_16"] ||
            surveyResult["Wellness_17"] ||
            surveyResult["Wellness_18"] ||
            surveyResult["Wellness_19"] ||
            surveyResult["Wellness_20"] ||
            surveyResult["Wellness_21"]) {
            acuity_score++;
            substanceUse = true;
        }
        if (surveyResult["Wellness_22"] ||
            surveyResult["Wellness_23"] ||
            surveyResult["Wellness_24"] ||
            surveyResult["Wellness_25"] ||
            surveyResult["Wellness_26"] ||
            surveyResult["Wellness_27"] ||
            surveyResult["Wellness_28"]) {
            acuity_score++;
            mentalHealthCondition = true;
        }
        //Tri-morbidity
        if (substanceUse && mentalHealthCondition && medicalCondition) {
            acuity_score++
        }
        if (surveyResult["Wellness_29"]) {
            acuity_score++;
        }
        if (surveyResult["Wellness_30"]) {
            acuity_score++;
        }

        // let results = {
        //     'acuity_score': acuity_score,
        //     'housing_recommendation': this.recommendation(acuity_score)
        // };
        // console.log(`Acuity result is ${results["acuity_score"]}: ${results["housing_recommendation"]}`);
        //console.log(`Acuity result is ${acuity_score}`);
        return acuity_score;
    }

};
