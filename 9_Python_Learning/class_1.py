
class State(object):
    country= 'AU'

    def __init__(self,name):
        self.name = name
        # return self.name

# __class__ to class 

obj_1 = State('Vic')
obj_2 = State('Tas')

print('obj_1: ', obj_1.name)
print('obj_2: ', obj_2.name)

print('State.country: ', State.country)

print('######################################')
obj_2.country='NZ'
print('State.country: ', State.country)
print('obj_2.country: ', obj_2.country)

print('#####################################')
obj_2.__class__.country='NZ'
print('State.country: ', State.country)
print('obj_2.country: ', obj_2.country)

##########################################################

class Foo(object):
    def __init__(self,name):
        self.name = name
    
    def ord_func(self):
        # print(self.name)
        print('instance method')

    @classmethod
    def class_func(cls):
        print('class method')

    @staticmethod
    def static_func():
        print('static method')

f = Foo("AU")


# instance method
f.ord_func()

# class method
Foo.class_func()

# static method
Foo.static_func()

