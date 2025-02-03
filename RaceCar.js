# Implement the Car and RaceCar class appropriately
# Inherit the Car class into RaceCar class and override the methods which have extra features
class Car:
    def __init__(self, color, max_speed, acceleration, tyre_friction):
        self.color = color
        self.max_speed = max_speed
        self.acceleration = acceleration
        self.tyre_friction = tyre_friction
        self.is_engine_started = False
        self.current_speed = 0

    def start_engine(self):
        self.is_engine_started = True

    def stop_engine(self):
        self.is_engine_started = False

    def accelerate(self):
        if not self.is_engine_started:
            print("Car has not started yet")
        else:
            self.current_speed += self.acceleration
            if self.current_speed > self.max_speed:
                self.current_speed = self.max_speed

    def apply_brakes(self):
        self.current_speed -= self.tyre_friction
        if self.current_speed < 0:
            self.current_speed = 0

    def sound_horn(self):
        if self.is_engine_started:
            print("Beep Beep")
        else:
            print("Car has not started yet")


class RaceCar(Car):
    def __init__(self, color, max_speed, acceleration, tyre_friction, nitro):
        super().__init__(color, max_speed, acceleration, tyre_friction)
        self.nitro=nitro

    def accelerate(self):
        
        if self.is_engine_started:
            if self.nitro>0:
                self.current_speed+=20
                self.nitro-=1
        super().accelerate()
        

    def sound_horn(self):
        if self.is_engine_started:
            print("Peep Peep")
        super().sound_horn()


# You need not change any code below.
# Do not call this function anywhere. It will automatically be called internally during tests.
def default_test():
    racecar = RaceCar(color="Red", max_speed=250, acceleration=50, tyre_friction=30, nitro=4)
    racecar.start_engine()
    racecar.accelerate()  # Calling the accelerate method when the is_engine_started is True
    print(racecar.current_speed)  # 0 + (50 + 20) => 70
    print(racecar.nitro)  # 4 - 1 => 3
    racecar.accelerate()  # 70 + (50 + 20) => 140
    print(racecar.current_speed)  # 140
    print(racecar.nitro)  # 3 - 1 => 2
    racecar.accelerate()  # 140 + (50 + 20) => 210
    print(racecar.current_speed)  # 210
    print(racecar.nitro)  # 2 - 1 => 1
    racecar.apply_brakes()  # 210 - 30 => 180
    print(racecar.current_speed)  # 180
    print(racecar.nitro)  # 1
    racecar.accelerate()  # 180 + (50 + 20) => 250
    print(racecar.current_speed)  # 250
    print(racecar.nitro)  # 1 - 1 => 0
    racecar.sound_horn()
