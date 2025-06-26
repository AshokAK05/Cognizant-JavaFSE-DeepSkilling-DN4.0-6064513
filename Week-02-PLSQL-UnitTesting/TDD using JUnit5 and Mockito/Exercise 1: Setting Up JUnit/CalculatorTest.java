import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    @Test
    public void testAddition() {
        int result = 6064 + 513; //SupersetID-6064513
        assertEquals(6577, result);
    }
    @Test
    public void testSubraction(){
        int result=6064-513;
        assertEquals("Subraction of Superset ID",5551,result);
    }
}
