public class FinancialForecast {
    public static double forecastValue(double amount, double rate, int period) {
        return (period == 0) ? amount : forecastValue(amount * (1 + rate), rate, period - 1);
    }
    public static double forecastWithCache(double baseAmount, double rate, int term, double[] cache) {
        if (term == 0)
            return baseAmount;
        if (cache[term] > 0)
            return cache[term];
        double previous = forecastWithCache(baseAmount, rate, term - 1, cache);
        cache[term] = previous * (1 + rate);
        return cache[term];
    }
    public static void main(String[] args) {
        double initialAmount = 1500.0;
        double annualRate = 0.25;
        int duration = 4;

        double recursiveForecast = forecastValue(initialAmount, annualRate, duration);
        System.out.println("Future Value (Recursive): $" + recursiveForecast);

        double[] cache = new double[duration + 1];
        double memoizedForecast = forecastWithCache(initialAmount, annualRate, duration, cache);
        System.out.println("Future Value (Memoized): $" + memoizedForecast);
    }
}
