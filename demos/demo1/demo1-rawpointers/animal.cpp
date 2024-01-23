#include "animal.h"

#include <iostream>

Animal::Animal(std::string name)
: m_name(name) // <== Member initializer list, you could also just initialize in the constructor as below
{
    // m_name = name;
    std::cout << m_name << " has woken up and is ready to entertain guests." << std::endl;
}

Animal::~Animal() {
    std::cout << m_name << " has fallen asleep for the day." << std::endl;
}

std::string Animal::getName() {
    return m_name;
}

void Animal::eat(int foodCount) {
    std::cout << m_name << " ate " << foodCount << " bits of food." << std::endl;
}