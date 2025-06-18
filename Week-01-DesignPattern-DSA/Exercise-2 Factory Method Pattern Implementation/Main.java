public class Main {
    public static void main(String[] args) {
        DocumentFactory wordFactory = new WordDocFact();
        Document wordDoc = wordFactory.createDocument();
        wordDoc.open();

        DocumentFactory pdfFactory = new PdfDocFact();
        Document pdfDoc = pdfFactory.createDocument();
        pdfDoc.open();

        DocumentFactory excelFactory = new ExcelDocFact();
        Document excelDoc = excelFactory.createDocument();
        excelDoc.open();
    }
}
