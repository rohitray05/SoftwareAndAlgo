
Requiremnent: You are coding up the business logic for a Package Handling system. Another team is creating a graphical user interface (GUI), but this is not ready yet. Yet another team is working on a persistence layer which, among other things, will be able to generate unique Shipment ID's for you when needed (see below), but this is also not yet ready.

Design Pattern Used:

- The main Class is Shipment with ship() method to get the cost of shipping items via various Shippers

- ShipperFactory is the factory design system used to include various Shippers being used based on      requirements and redirect to different Shipper Class.

-  Shipper interface design is Strategy Structure where getcost algorithm is different for different Shippers available

- The Decorator Design Pattern is used in the Client class , to display the Special tags on shipment after the cost is calculated