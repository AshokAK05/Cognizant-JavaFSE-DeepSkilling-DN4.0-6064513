public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(111, "Television", "Electronics"),
            new Product(222, "Bracelet", "Fashion"),
            new Product(333, "Joystick", "Electronics"),
            new Product(444, "Books", "Literature"),
            new Product(555, "Table", "Furniture")
        };
        System.out.println("Linear Search:");
        Product linearResult = LinBinSearch.linearSearch(products, "Table");
        if (linearResult != null)
            System.out.println("Found Product: " + linearResult);
        else
            System.out.println("Product not been found");
        LinBinSearch.sortProductsByName(products);
        System.out.println("\n Binary Search:");
        Product binaryResult = LinBinSearch.binarySearch(products, "Table");
        if (binaryResult != null)
            System.out.println("Found Product: " + binaryResult);
        else
            System.out.println("Product not been found");
    }
}
