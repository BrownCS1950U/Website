#include <map>

#include "animal.h"
#include "zookeeper.h"
#include "zoo.h"

Zoo::Zoo()
: m_foodStorage(0) // <== Member initializer list, you could also just initialize in the constructor as below
{
    // m_foodStorage = 0
}

Zoo::~Zoo() {
    std::cout << "Closing the zoo for the day." << std::endl;

    // Since we are using raw pointers, we must "delete" any pointer we allocated
    // memory for using "new". Failure to do so causes memory leaks
    for (const auto& [animalName, animal] : m_animals) {
        delete animal;
    }

    for (const auto& [zookeeperName, zookeeper] : m_zookeepers) {
        delete zookeeper;
    }
}

void Zoo::addFood(int foodAmount) {
    m_foodStorage += foodAmount;
}

int Zoo::withdrawFood(int foodAmount) {
    int foodToRemove = std::min(foodAmount, m_foodStorage);
    m_foodStorage -= foodToRemove;
    return foodToRemove;
}

void Zoo::addAnimal(const std::string& animalName) {
    // We're allocating dynamic memory here: we'll have to call delete on this pointer later
    // to avoid a memory leak
    Animal* animal = new Animal(animalName);
    m_animals[animalName] = animal;
}

void Zoo::addZookeeper(const std::string& zookeeperName) {
    // We're allocating dynamic memory here: we'll have to call delete on this pointer later
    // to avoid a memory leak
    Zookeeper* zookeeper = new Zookeeper(zookeeperName, this);
    m_zookeepers[zookeeperName] = zookeeper;
}

Zookeeper* Zoo::getZookeeper(const std::string& zookeeperName) {
    return m_zookeepers[zookeeperName];
}

Animal* Zoo::getAnimal(const std::string& animalName) {
    return m_animals[animalName];
}

void Zoo::assignZookeeperToAnimal(const std::string& zookeeperName, const std::string& animalName) {
    m_assignments[zookeeperName] = animalName;
}

Animal* Zoo::getAssignedAnimal(const std::string& zookeeperName) {
    return m_animals[m_assignments[zookeeperName]];
}