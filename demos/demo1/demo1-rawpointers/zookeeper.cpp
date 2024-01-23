#include "animal.h"
#include "zoo.h"
#include "zookeeper.h"

Zookeeper::Zookeeper(const std::string& name, Zoo* zoo)
: m_name(name), m_zoo(zoo) // <== Member initializer list, you could also just initialize in the constructor as below
{
    // m_name = name;
    // m_zoo = zoo;
    std::cout << "Zoo keeper " << m_name << " has arrived to work." << std::endl;
}

Zookeeper::~Zookeeper() {
    std::cout << "Zoo keeper " << m_name << " has ended their shift." << std::endl;
}

std::string Zookeeper::getName() {
    return m_name;
}

void Zookeeper::feedAssignedAnimal(int foodAmount) {
    int foodWithdrawn = m_zoo->withdrawFood(foodAmount);

    Animal* animal = m_zoo->getAssignedAnimal(m_name);

    std::string animalName = animal->getName();
    
    if (foodWithdrawn < foodAmount) {
        std::cout << "Zoo keeper " << m_name << " failed to feed " << animalName << " " << foodAmount 
        << " food because the zoo only has " << foodWithdrawn << " food." << std::endl;
        m_zoo->addFood(foodWithdrawn);
    } 
    
    else {
        std::cout << "Zoo keeper " << m_name << " is feeding " << animalName << " " << foodAmount << " food." << std::endl;
        animal->eat(foodAmount);
    }
}