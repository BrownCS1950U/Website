#include <map>
#include <memory>

#include "animal.h"
#include "zookeeper.h"
#include "zoo.h"

Zoo::Zoo()
: m_foodStorage(0) 
{
    std::cout << "Opening the zoo for the day." << std::endl;
}

Zoo::~Zoo() {
    std::cout << "Closing the zoo for the day." << std::endl;
    // No need to explicitly delete anything, since we're using smart pointers!
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
    std::unique_ptr<Animal> animal = std::make_unique<Animal>(animalName);
    // std::move moves the unique_ptr into the vector without trying to make a copy.
    // We are essentially transferring ownership from the scope of this function to
    // the zoo object. This is neccessary, because if this function kept owning the
    // unique pointer, the pointer would be deleted at the end of the function's scope.
    m_animals[animalName] = std::move(animal);
}

void Zoo::addZookeeper(const std::string& zookeeperName) {
    // Note that we're now passing shared_from_this() instead of this. See zoo.h for more details
    std::shared_ptr<Zookeeper> zookeeper = std::make_shared<Zookeeper>(zookeeperName, shared_from_this());
    m_zookeepers[zookeeperName] = zookeeper;
}

std::shared_ptr<Zookeeper> Zoo::getZookeeper(const std::string& zookeeperName) {
    return m_zookeepers[zookeeperName];
}

// Note the usage of const reference returns for the two functions below (see zoo.h for more details)
const std::unique_ptr<Animal>& Zoo::getAnimal(const std::string& animalName) {
    return m_animals[animalName];
}

const std::unique_ptr<Animal>& Zoo::getAssignedAnimal(const std::string& zookeeperName) {
    return m_animals[m_assignments[zookeeperName]];
}

void Zoo::assignZookeeperToAnimal(const std::string& zookeeperName, const std::string& animalName) {
    m_assignments[zookeeperName] = animalName;
}