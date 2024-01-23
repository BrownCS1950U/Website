#include "animal.h"
#include "zoo.h"
#include "zookeeper.h"

Zookeeper::Zookeeper(const std::string& name, std::shared_ptr<Zoo> zoo)
: m_name(name), m_zoo(zoo)
{
    std::cout << "Zoo keeper " << m_name << " has arrived to work." << std::endl;
}

Zookeeper::~Zookeeper() {
    std::cout << "Zoo keeper " << m_name << " has ended their shift." << std::endl;
}

std::string Zookeeper::getName() {
    return m_name;
}

void Zookeeper::feedAssignedAnimal(int foodAmount) {
    // To access the object pointed to by the weak pointer, we use the .lock() method to create a temporary shared pointer.
    // This shared pointer is a copy of the one created in main.cpp, and therefore will only possess a reference count of 1 
    // and be deleted at the end of this function
    std::shared_ptr<Zoo> zoo_ptr = m_zoo.lock();

    int foodWithdrawn = zoo_ptr->withdrawFood(foodAmount);

    const std::unique_ptr<Animal>& animal = zoo_ptr->getAssignedAnimal(m_name);
    std::string animalName = animal->getName();
    
    if (foodWithdrawn < foodAmount) {
        std::cout << "Zoo keeper " << m_name << " failed to feed " << animalName << " " << foodAmount 
        << " food because the zoo only has " << foodWithdrawn << " food." << std::endl;
        zoo_ptr->addFood(foodWithdrawn);
    } 
    
    else {
        std::cout << "Zoo keeper " << m_name << " is feeding " << animalName << " " << foodAmount << " bits of food." << std::endl;
        animal->eat(foodAmount);
    }
}