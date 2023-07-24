# CarCar

Team:

* Person 1 - Which microservice?
* Nick R. - Which microservice? Sales

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

My approach to the sales microservice is to create 3 models for AutomobileVO, Salesperson, Customer, and then a 4th model for Sales. This final model will primarily be a link of multiple foreignkeys linked to each of the prior models due to its need for multiple forms of data. My AutomobileVO will be linked to the poller allowing me to collect my data from there for population within the sales field.
