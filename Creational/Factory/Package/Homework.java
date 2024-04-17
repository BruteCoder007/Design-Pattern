package Package;

// Homework class implementing the Content interface
class Homework implements Content {
    private String homeworkName;

    public Homework(String homeworkName) {
        this.homeworkName = homeworkName;
    }

    @Override
    public void display() {
        System.out.println("Displaying homework: " + homeworkName);
    }
}
