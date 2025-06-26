import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {
    private Calculator calculator;
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup complete.");
    }
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown complete.");
    }
    @Test
    public void testAddition() {
        // Arrange
        int a = 5;
        int b = 3;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals("Sum should be 8", 8, result);
    }
    @Test
    public void testSubraction(){
        int a = 10;
        int b = 5;
        int result= calculator.sub(a,b);
        assertEquals("Subract should be 5",5,result);
    }
    @Test
    public void testMultiplication() {
        // Arrange
        int a = 4;
        int b = 6;

        // Act
        int result = calculator.multiply(a, b);

        // Assert
        assertEquals("Product should be 24", 24, result);
    }
}
