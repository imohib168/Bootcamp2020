export const CalculateTime = (timeInSeconds: number): Array<number | string> => {

    // minutes x seconds --> 60 x 60 = 3600
    // 1 hour has 3600 sec in it so By Dividing 
    // the total number of seconds by 3600 we get the total hours
    let hours: number = Math.floor(timeInSeconds / 3600);

    // (3600 - (0 * 3600)) / 60
    let minutes: number = Math.floor((timeInSeconds - (hours * 3600)) / 60);

    // 3600 - (0 * 3600) - (0 * 60)
    let seconds: number = timeInSeconds - (hours * 3600) - (minutes * 60);

    let hoursFormat = hours < 10 ? `0${hours}` : hours;
    let minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
    let secondsFormat = seconds < 10 ? `0${seconds}` : seconds;

    return [
        hoursFormat,
        minutesFormat,
        secondsFormat,
    ];
};