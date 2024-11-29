public class Lasana
{
    //tempo da lasanha
    public int ExpectedMinutesInOven()
    {
        return 40;
    }

    public int RemaningTimeInMinutes(int actualMinutesInOven)
    {
        int remaningTime = ExpectedMinutesInOven() - actualMinutesInOven;
        return remaningTime;
    }

    public int PreparationTimeInMinutes(int numberOfLayers)
    {
        int timePerLayer = numberOfLayers * 2;
        return timePerLayer;
    }

    public int ElapsedTimeInMinutes(int numberOfLayers, int actualMinutesInOven)
    {
        int Elapsedtime = PreparationTimeInMinutes(numberOfLayers) + RemaningTimeInMinutes(actualMinutesInOven);
        return Elapsedtime;
    }

}