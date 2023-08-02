# CarCar

Team:

* Roland C. - Service Team
* Nick R. -  Sales Team


## Getting started

CarCar was created using Django for the backend and react for the front end. This application is fully containerized using Docker. To run the app please utalize our docker compose file. While in your terminal navigate to this project in the parent directory please run the command "docker compose build" followed by "docker compose up". 



## Application Details

This application was built to encompass the sales side and the service side of a car dealership. 

When using this application please note that the VIN number has a max length of 17 characters. 

On the sales side users can add and view sales people, customers and sale reciepts. Users can also see saleperson history to see which sales person is selling what vechicle.

On the service side users can view and add technicians, and appointments. Users can also see a service history to see all vechicles that have been serviced.





# Service Side


<h2> Users can make appointments by filling out the form, users will have to make a technician to properly complete this form. </h2>

![alternate text](images/service/MakeAppointment.png)


<h2> Users can view all appointments and the details of those appointments, users can also see if the vechicle exists in the inventory if it does it is marked as VIP. The status can also be changed to finshed or cancelled. </h2>

![alternate text](images/service/AppointmentList.png)


<h2> Users can add technicians and see the list of all technicians along with their employee information </h2>

![alternate text](images/service/Technician.png)

![alternate text](images/service/TechnicianList.png)



<h2> After an appointment is made users can view the service history of all vechicles that had appointments at CarCar. </h2>

![alternate text](images/service/ServiceHistory.png)





# Sales Side

<h2> Users can add salespeople and see all the salespeople that have been added along with their employee information </h2>

![alternate text](images/sales/SalesPerson.png)
![alternate text](images/sales/SalesPeople.png)

<h2> Users can add customers and see all customers that were added and any information saved about the customer.  </h2>

![alternate text](images/sales/Customer.png)
![alternate text](images/sales/Customers.png)

<h2> Users can create sales and see a list of all the sales that were made. </h2>

![alternate text](images/sales/Sale.png)
![alternate text](images/sales/SaleHistory.png)


<h2> Sales Person history is also stored allowing users to see all the sales of one particular sales person </h2>

![alternate text](images/sales/SalesPersonHistory.png)




### Service Side



The service side uses 4 models the AutomobileVO, Status, Technician and appointment. The appointment model has multiple foreign keys one for status and one for technican, these keys allow for the models to be linked to the appointment. This allows us to create appointments with technicans and different status that were made.   

### Sales Side 

My approach to the sales microservice is to create 3 models for AutomobileVO, Salesperson, Customer, and then a 4th model for Sales. This final model will primarily be a link of multiple foreignkeys linked to each of the prior models due to its need for multiple forms of data. My AutomobileVO will be linked to the poller allowing me to collect my data from there for population within the sales field.
