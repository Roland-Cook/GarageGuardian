# CarCar

Team:

* Roland C. - Service Team
* Nick R. -  Sales Team

## Design


## Service microservice

My approach to the service microservice is to create 3 models to support my service side database, Technician, AutomobileVO and Appointment. The appointment model will have the technician as a foreign key so users can pick from a technician that added.  My AutomobileVO will be linked to the poller allowing me to collect data from there database to use for the service side.

## Sales microservice

My approach to the sales microservice is to create 3 models for AutomobileVO, Salesperson, Customer, and then a 4th model for Sales. This final model will primarily be a link of multiple foreignkeys linked to each of the prior models due to its need for multiple forms of data. My AutomobileVO will be linked to the poller allowing me to collect my data from there for population within the sales field.

``
