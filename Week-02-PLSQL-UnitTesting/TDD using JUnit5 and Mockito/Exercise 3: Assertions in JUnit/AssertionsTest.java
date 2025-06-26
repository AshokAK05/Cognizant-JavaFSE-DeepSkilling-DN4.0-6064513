import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert that the sum is correct
        assertEquals("Sum should be 6577", 6577, 6064+513);

        // Assert that a condition is true
        assertTrue("6064 is greater than 513", 6064 > 513);

        // Assert that a condition is false
        assertFalse("6064 is not less than 513", 6064 < 513);

        // Assert that the value is null
        assertNull("Value should be null", null);

        // Assert that the value is not null
        assertNotNull("Object should not be null", new Object());
    }
}
