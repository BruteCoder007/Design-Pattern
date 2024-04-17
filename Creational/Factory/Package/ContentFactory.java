package Package;


// Thread-safe Content Factory class
class ContentFactory {
    // Lock object for synchronization
    private static final Object lock = new Object();

    // Factory method to create content instances
    public static Content createContent(String contentType, String name) {
        synchronized (lock) {
            switch (contentType.toLowerCase()) {
                case "topic":
                    return new Topic(name);
                case "worksheet":
                    return new Worksheet(name);
                case "homework":
                    return new Homework(name);
                default:
                    throw new IllegalArgumentException("Unknown content type: " + contentType);
            }
        }
    }
}