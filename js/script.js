// Your JS code here
var subTypeElement = document.querySelector("#subscription");
//console.log(subTypeElement);
var subDurationElement = document.querySelector("#months");
//console.log(subDurationElement);
var result = document.querySelector(".result");
//console.log(result);
var subType = "basic";
var subDuration = 1;
//console.log(subDuration);

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
  //console.log(subType);
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = e.target.value;
  updateSubscriptionDiv();
  //console.log(subDuration);
});

var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for a $${total}.`;
};
