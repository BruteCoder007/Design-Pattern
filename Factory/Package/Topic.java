package Package;


// Topic class implementing the Content interface
class Topic implements Content {
    private String topicName;

    public Topic(String topicName) {
        this.topicName = topicName;
    }

    @Override
    public void display() {
        System.out.println("Displaying topic: " + topicName);
    }
}