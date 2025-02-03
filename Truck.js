# Implement the Car and Truck class appropriately
# Inherit the Car class into Truck class and override the methods which have extra features
class Car:
    def __init__(self, color, max_speed, acceleration, tyre_friction):
        self.color=color
        self.max_speed=max_speed
        self.acceleration=acceleration
        self.tyre_friction=tyre_friction
        self.is_engine_started=False
        self.current_speed=0

    def start_engine(self):
        self.is_engine_started=True

    def stop_engine(self):
        self.is_engine_started=False

    def accelerate(self):
        if self.is_engine_started:
            if self.current_speed<self.max_speed:
                self.current_speed+=self.acceleration
        else:
            print("Car has not started yet")

    def apply_brakes(self):
        self.current_speed-=self.tyre_friction
        if self.current_speed<0:
            self.current_speed=0
            

    def sound_horn(self):
        if self.is_engine_started:
            print("Beep Beep")
        else:
            print("Car has not started yet")


class Truck(Car):
    def __init__(self, color, max_speed, acceleration, tyre_friction, max_cargo_weight):
        self.color=color
        self.max_speed=max_speed
        self.acceleration=acceleration
        self.tyre_friction=tyre_friction
        self.max_cargo_weight=max_cargo_weight
        self.load=0
        self.is_engine_started=False

    def load_cargo(self,cargo_weight):
        self.cargo_weight=cargo_weight
        if self.cargo_weight > self.max_cargo_weight:
            print("Cannot load cargo more than max limit: {}".format(self.max_cargo_weight))
        elif self.is_engine_started:
            print("Cannot load cargo during motion")
        else:
            self.load+=self.cargo_weight

    def unload_cargo(self,cargo_weight):
        self.cargo_weight=cargo_weight
        if self.is_engine_started:
            print("Cannot unload cargo during motion")
        self.load-=self.cargo_weight
        if self.load<0:
            self.load=0

    def sound_horn(self):
        if self.is_engine_started:
            print("Honk Honk")
        else:
            print("Car has not started yet")


# You need not change any code below.
# Do not call this function anywhere. It will automatically be called internally during tests.
def default_test():
    truck = Truck(color="Red", max_speed=250, acceleration=10, tyre_friction=3, max_cargo_weight=100)
    print(truck.is_engine_started)
    truck.load_cargo(cargo_weight=50)  # Loading cargo_weight 50 to the truck
    print(truck.load)  # 0 + 50 => 50
    
    truck.unload_cargo(cargo_weight=25)  # Unloading cargo_weight 25 from the truck
    print(truck.load)  # 50 - 25 => 25
    truck.unload_cargo(cargo_weight=70)  # Unloading cargo_weight 70 (more than load in the truck)
    print(truck.load)  # 25 - 75 => 0 as load never be negative
    truck.load_cargo(cargo_weight=120)  # Prints "Cannot load cargo more than max limit: 100"



    truck.load_cargo(cargo_weight=20)  # Loading cargo_weight 20 to the truck
    truck.start_engine()
    print(truck.is_engine_started)  # True
    truck.load_cargo(cargo_weight=40)  # Prints "Cannot load cargo during motion"
    truck.unload_cargo(cargo_weight=10)  # Prints "Cannot unload cargo during motion"

    truck.sound_horn()  # Prints "Honk Honk"
    truck.stop_engine()
    truck.sound_horn()  # Prints "Car has not started yet"