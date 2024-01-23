#include "zoo.h"
#include "zookeeper.h"

#include <string>
#include <iostream>

// This program features a zoo object that maintains zookeeper and animal objects that are
// dynamically allocated and are managed with raw pointers.

int main() {
    // Step 1: Initialize a Zoo object and add some food to the zoo. Nothing special happening yet
    Zoo zoo;
    zoo.addFood(100);

    // Step 2: Instantiate and allocate memory for ZooKeeper objects. See Zoo::addZookeeper for details
    zoo.addZookeeper("Alice");
    zoo.addZookeeper("Bob");

    // Step 3: Instantiate and allocate memory for Animal objects. See Zoo::addAnimal for details
    zoo.addAnimal("Ellie the Elephant");
    zoo.addAnimal("Gary the Giraffe");

    // Step 4: Everything below is just demonstrating that the objects can access and modify
    // each others' states (aka verifying that everything is working properly).
    // See the Zookeeper and Animal implementations for details
    zoo.assignZookeeperToAnimal("Alice", "Ellie the Elephant");
    zoo.assignZookeeperToAnimal("Bob", "Gary the Giraffe");
    Zookeeper* alice = zoo.getZookeeper("Alice");
    Zookeeper* bob = zoo.getZookeeper("Bob");
    alice->feedAssignedAnimal(70);
    bob->feedAssignedAnimal(30);
    bob->feedAssignedAnimal(20);

    // At the end of main the Zoo's destructor will automatically be called. Note that in the Zoo destructor
    // in zoo.cpp, we delete the zookeeper and animal pointers

    std::cout << "Exiting main." << std::endl;

    return 0;
}