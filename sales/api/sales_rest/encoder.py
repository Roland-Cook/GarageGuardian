from models import AutomobileVO, Salesperson, Customer, Sale


class AutomobileVOEncoder():
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
    ]


class SalespersonEncoder():
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id"
    ]


class CustomerEncoder():
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "phone_number",
    ]


class SaleEncoder():
    model = Sale
    properties = [
        "automobile",
        "salesperson",
        "customer",
        "price",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder
    }