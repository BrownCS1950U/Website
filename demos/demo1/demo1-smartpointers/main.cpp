#include "zoo.h"
#include "animal.h"
#include "zookeeper.h"

#include <string>
#include <iostream>

// This program is identical to demo1-rawpointers except that smart pointers are used.

int main() {
    // Step 1: Initialize a Zoo object and add some food to the zoo.
    // Note that the zoo object now needs to be initalized with a shared pointer 
    // because the zookeepers possess weak pointers to the zoo object.
    // Each weak pointer creates a copy of this shared pointer with the .lock() method
    // See zookeeper.cpp for more details, but save this for the end if you're confused
    std::shared_ptr<Zoo> zoo = std::make_shared<Zoo>();
    zoo->addFood(100);

    // Step 2: Instantiate Zookeeper objects using shared pointers. See Zoo::addZookeeper for details
    zoo->addZookeeper("Alice");
    zoo->addZookeeper("Bob");

    // Step 3: Instantiate Animal objects using unique pointers. See Zoo::addAnimal for details
    zoo->addAnimal("Ellie the Elephant");
    zoo->addAnimal("Gary the Giraffe");

    // Step 4: Pretty much doing exactly what we were doing before
    zoo->assignZookeeperToAnimal("Alice", "Ellie the Elephant");
    zoo->assignZookeeperToAnimal("Bob", "Gary the Giraffe");

    // Note here that main() is gaining shared access to the Zookeeper objects. If we had instantiated the
    // zookeepers with unique pointers, we would not be able to do this. This is why shared pointers are much
    // more convenient than unique pointers
    std::shared_ptr<Zookeeper> alice = zoo->getZookeeper("Alice");
    std::shared_ptr<Zookeeper> bob = zoo->getZookeeper("Bob");

    alice->feedAssignedAnimal(70);
    bob->feedAssignedAnimal(30);
    bob->feedAssignedAnimal(20);

    // Step 5: Zoo's destructor is automatically called, but you'll notice that we no longer have to deallocate memory
    
    // Step 6: Try it yourself! In zookeeper.h, Change m_zoo from a weak pointer to a shared pointer, and then make updates
    // to Zookeeper::feedAssignedAnimal to reflect this. What behavior in the code changes? Why or why isn't this bad?

    std::cout << "Exiting main." << std::endl;
    
    return 0;
}