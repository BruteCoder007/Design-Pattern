package Package;

// Worksheet class implementing the Content interface
class Worksheet implements Content {
    private String worksheetName;

    public Worksheet(String worksheetName) {
        this.worksheetName = worksheetName;
    }

    @Override
    public void display() {
        System.out.println("Displaying worksheet: " + worksheetName);
    }
}