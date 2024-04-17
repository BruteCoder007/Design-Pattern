package Package;
public class ContentFactoryDemo {
    public static void main(String[] args) {
        // Create Runnable tasks to use the factory
        Runnable topicTask = () -> {
            Content topic = ContentFactory.createContent("topic", "Math");
            topic.display();
        };

        Runnable worksheetTask = () -> {
            Content worksheet = ContentFactory.createContent("worksheet", "Science Worksheet");
            worksheet.display();
        };

        Runnable homeworkTask = () -> {
            Content homework = ContentFactory.createContent("homework", "History Homework");
            homework.display();
        };

        // Create and start threads
        Thread topicThread = new Thread(topicTask, "Topic Thread");
        Thread worksheetThread = new Thread(worksheetTask, "Worksheet Thread");
        Thread homeworkThread = new Thread(homeworkTask, "Homework Thread");

        topicThread.start();
        worksheetThread.start();
        homeworkThread.start();

        // Wait for all threads to finish
        try {
            topicThread.join();
            worksheetThread.join();
            homeworkThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("All threads have finished.");
    }
}
