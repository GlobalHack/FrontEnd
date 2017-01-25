
function getHousingRecommendation(acuity_score) {
    if (acuity_score <= 4) {
        return ("Not recommended for a Housing and Support Assessment at this time");
    } else if (acuity_score > 4 && acuity_score <= 9) {
        return ("Recommended for a Rapid Re-Housing Assessment");
    } else if (acuity_score >= 10) {
        return ("Recommended for a Permanent Supportive Housing/Housing First Assessment");
    } else {
        console.error(`Unable to calculate housing recommendation for acuity score of ${acuity_score}`);
    }
}

module.exports.calculateAcuityScore = function (surveyResult) {
    console.log("Calculating acuity score");
    let acuity_score = 0;
    let medicalCondition = false;
    let substanceUse = false;
    let mentalHealthCondition = false;

    if (surveyResult["General.1"] >= 60) {
        acuity_score++;
    }
    if (surveyResult["Housing.1"] >= 2 || surveyResult["Housing.2"] >= 4) {
        acuity_score++;
    }
    if (surveyResult["Risks.1"] +
        surveyResult["Risks.2"] +
        surveyResult["Risks.3"] +
        surveyResult["Risks.4"] +
        surveyResult["Risks.5"] >= 4) {
        acuity_score++;
    }
    if (surveyResult["Risks.6"] || surveyResult["Risks.7"]) {
        acuity_score++;
    }
    if (surveyResult["Risks.8"]) {
        acuity_score++;
    }
    if ((surveyResult["Risks.9"] || surveyResult["Risks.10"]) ||
        (typeof surveyResult["Risks.11"] !== 'undefined' && surveyResult["Risks.11"] != "Shelter")) {
        acuity_score++;
    }
    if (surveyResult["Social.1"] ||
        (typeof surveyResult["Social.2"] !== 'undefined' && !surveyResult["Social.2"]) ||
        (typeof surveyResult["Social.3"] !== 'undefined' && !surveyResult["Social.3"])) {
        acuity_score++;
    }
    if (typeof surveyResult["Social.4"] !== 'undefined' && !surveyResult["Social.4"]) {
        acuity_score++;
    }
    if (surveyResult["Social.5"] || surveyResult["Social.6"]) {
        acuity_score++;
    }
    if (surveyResult["Social.7"]) {
        acuity_score++;
    }
    if (surveyResult["Wellness.1"] == "Does not go for care") {
        acuity_score++;
    }
    if (surveyResult["Wellness.2"]) {
        acuity_score++;
        medicalCondition = true;
    }
    if (surveyResult["Wellness.3"]) {
        acuity_score++;
        medicalCondition = true;
    }
    if (surveyResult["Wellness.4"]) {
        acuity_score++;
        medicalCondition = true;
    }
    if (surveyResult["Wellness.5"]) {
        acuity_score++;
        medicalCondition = true;
    }
    if (surveyResult["Wellness.6"] ||
        surveyResult["Wellness.7"] ||
        surveyResult["Wellness.8"] ||
        surveyResult["Wellness.9"] ||
        surveyResult["Wellness.10"] ||
        surveyResult["Wellness.11"] ||
        surveyResult["Wellness.12"] ||
        surveyResult["Wellness.13"] ||
        surveyResult["Wellness.14"]) {
        medicalCondition = true;
    }
    if (surveyResult["Wellness.15"] ||
        surveyResult["Wellness.16"] ||
        surveyResult["Wellness.17"] ||
        surveyResult["Wellness.18"] ||
        surveyResult["Wellness.19"] ||
        surveyResult["Wellness.20"] ||
        surveyResult["Wellness.21"]) {
        acuity_score++;
        substanceUse = true;
    }
    if (surveyResult["Wellness.22"] ||
        surveyResult["Wellness.23"] ||
        surveyResult["Wellness.24"] ||
        surveyResult["Wellness.25"] ||
        surveyResult["Wellness.26"] ||
        surveyResult["Wellness.27"] ||
        surveyResult["Wellness.28"]) {
        acuity_score++;
        mentalHealthCondition = true;
    }
    //Tri-morbidity
    if (substanceUse && mentalHealthCondition && medicalCondition) {
        acuity_score++
    }
    if (surveyResult["Wellness.29"]) {
        acuity_score++;
    }
    if (surveyResult["Wellness.30"]) {
        acuity_score++;
    }

    let results = {
        'acuity_score': acuity_score,
        'housing_recommendation': getHousingRecommendation(acuity_score)
    };
    console.log(`Acuity result is ${results["acuity_score"]}: ${results["housing_recommendation"]}`);
    return results;
}
