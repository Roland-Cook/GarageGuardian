# CarCar

Team:

* Roland C. - Service Team
* Nick R. -  Sales Team


## Getting started

CarCar was created using Django for the backend and react for the front end. This application is fully containerized using Docker. To run the application please utalize our docker compose file. While in your terminal navigate to this project and in the parent directory please run the command "docker compose build" followed by "docker compose up". 



## Application Details

This application was built to encompass the sales side and the service side of a car dealership. 

When using this application please note that the VIN number has a max length of 17 characters. 

On the sales side users can add and view sales people, customers and sale reciepts. Users can also see saleperson history to see which sales person is selling what vechicle.

On the service side users can view and add technicians, and appointments. Users can also see a service history to see all vechicles that have been serviced.





# Service Side


<h3> Users can make appointments by filling out the form, users will have to make a technician to properly complete this form. </h3>

![alternate text](images/service/MakeAppointment.png)


<h3> All appointments and the details of those appointments can be viewed under the appointment list page, users can also see if the vechicle exists in the inventory if it does it is marked as VIP. The status can also be changed to finshed or cancelled. </h3>

![alternate text](images/service/AppointmentList.png)


<h3> Users can add technicians and see the list of all technicians along with their employee information </h3>

![alternate text](images/service/Technician.png)

![alternate text](images/service/TechnicianList.png)



<h3> After an appointment is made users can view the service history of all vechicles that had appointments at CarCar. </h3>

![alternate text](images/service/ServiceHistory.png)





# Sales Side

<h3> Users can add salespeople and see all the salespeople that have been added along with their employee information </h3>

![alternate text](images/sales/SalesPerson.png)
![alternate text](images/sales/SalesPeople.png)

<h3> Customers can be added under the add a customer page and users can see all customers that were added and the information saved about the customer.  </h3>

![alternate text](images/sales/Customer.png)
![alternate text](images/sales/Customers.png)

<h3> Users can create sales and see a list of all the sales that were made. </h3>

![alternate text](images/sales/Sale.png)
![alternate text](images/sales/SaleHistory.png)


<h3> Sales Person history is also stored allowing users to see all the sales of one particular sales person </h3>

![alternate text](images/sales/SalesPersonHistory.png)




### Service Models



The service side uses 4 models the AutomobileVO, Status, Technician and appointment. The appointment model has multiple foreign keys one for status and one for technican, these keys allow for the models to be linked to the appointment. This allows us to create appointments with technicans and different status that were made.   

### Sales Models

My approach to the sales microservice is to create 3 models for AutomobileVO, Salesperson, Customer, and then a 4th model for Sales. This final model will primarily be a link of multiple foreignkeys linked to each of the prior models due to its need for multiple forms of data. My AutomobileVO will be linked to the poller allowing me to collect my data from there for population within the sales field.
