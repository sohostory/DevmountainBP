const tripTime = (arr) => {
  // loop through arr push avg speed limit to result
  // loop through arr push segment times to result
  // loop through arr add up segment times to get total time

  let result = {
    avgSpeedLimits: [],
    segmentTimes: [],
    totalTime: null,
  };

  arr.forEach((stop) => {
    let avgSpeed = 0;
    let totalDistance = 0;
    let totalTime = 0;
    let segmentTimes = [];
    let avgSpeedLimits = [];

    stop.speedLimits.forEach((speedLimit) => {
      avgSpeedLimits.push(speedLimit.speedLimit);
      totalDistance += speedLimit.distance;
      avgSpeed =
        avgSpeedLimits.reduce((a, b) => a + b, 0) / avgSpeedLimits.length;
      totalTime = totalDistance / avgSpeed;
      segmentTimes.push(parseFloat(totalTime.toFixed(2)));
    });
    result.avgSpeedLimits.push(Math.round(avgSpeed));
    result.segmentTimes.push(segmentTimes);
  });

  // loop through segmentTimes and add up individual arrays
  // to get total time
  tripTimes = result.segmentTimes.forEach((segment) => {
    let total = 0;
    segment.forEach((time) => {
      total += time;
    });
    result.totalTime = total;
  });

  return result;
};

// UNCOMMENT THE FUNCTION CALL AT
// THE BOTTOM BEFORE RUNNING THE FILE

const stops = [
  {
    name: `Gus's Gas`,
    speedLimits: [
      {
        distance: 5,
        speedLimit: 45,
      },
      {
        distance: 97,
        speedLimit: 65,
      },
      {
        distance: 72,
        speedLimit: 70,
      },
      {
        distance: 25,
        speedLimit: 50,
      },
    ],
    traffic: 12,
  },
  {
    name: `Halle's House of Pancakes`,
    speedLimits: [
      {
        distance: 36,
        speedLimit: 50,
      },
      {
        distance: 141,
        speedLimit: 75,
      },
    ],
    traffic: 0,
  },
  {
    name: `Jake's Great Shakes`,
    speedLimits: [
      {
        distance: 100,
        speedLimit: 75,
      },
      {
        distance: 84,
        speedLimit: 70,
      },
      {
        distance: 20,
        speedLimit: 75,
      },
    ],
    traffic: 30,
  },
  {
    name: `Luna's Lunch Counter`,
    speedLimits: [
      {
        distance: 3,
        speedLimit: 35,
      },
      {
        distance: 5,
        speedLimit: 45,
      },
      {
        distance: 20,
        speedLimit: 65,
      },
      {
        distance: 85,
        speedLimit: 75,
      },
      {
        distance: 3,
        speedLimit: 65,
      },
      {
        distance: 5,
        speedLimit: 55,
      },
    ],
    traffic: 7,
  },
];

console.log(tripTime(stops));
