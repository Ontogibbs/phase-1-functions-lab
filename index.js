function distanceFromHqInBlocks(num) {
    let  hqDistanceInBlocks;
    if (num > 42) {
        hqDistanceInBlocks = num - 42;
      } else {
        hqDistanceInBlocks  = 42 - num;
      }
      return  hqDistanceInBlocks ;
} 
    

function distanceFromHqInFeet(num){
    //console.log(distanceFromHqInBlocks(5))
return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(num1, num2) {
    let distanceInFeet;
    if (num1 >= num2){
        distanceInFeet = (num1 - num2) * 264
    } else {
        distanceInFeet = (num2 - num1) * 264
    }
    return distanceInFeet;
}

function calculatesFarePrice(num1, num2){
    let fare = distanceTravelledInFeet(num1, num2);
    if (fare <= 400)  {
        return 0
    }
    else if (fare <=2000){
    return .02 * (fare - 400)
    }

    else if (fare <=2500) {
    return 25
    }

    else if (fare >2500){
    return  "cannot travel that far"
    }
    //console.log (distanceTravelledInFeet(34,0))
return calculatesFarePrice;
}