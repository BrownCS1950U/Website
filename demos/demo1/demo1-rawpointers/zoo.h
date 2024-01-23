#ifndef ZOO_H
#define ZOO_H

#include <map>

class Animal;
class Zookeeper;

class Zoo {
public:
    Zoo();
    ~Zoo();
    
    // "Food" is just an integer for demonstrating that the zookeepers can modify the zoo's state
    void addFood(int foodAmount);
    int withdrawFood(int foodAmount);

    // "Factory" methods: allocate memory for and instantiate objects
    void addAnimal(const std::string& animalName);
    void addZookeeper(const std::string& zookeeperName);

    // Getter methods
    Animal* getAnimal(const std::string& animalName);
    Zookeeper* getZookeeper(const std::string& zookeeperName);
    Animal* getAssignedAnimal(const std::string& zookeeperName);

    // Zookeepers are assigned to animals via the m_assignments map
    void assignZookeeperToAnimal(const std::string& zookeeperName, const std::string& animalName);

private:
    // "m_" prefixes indicate that these are [m]embers of the class
    std::map<std::string, Animal*> m_animals;
    std::map<std::string, Zookeeper*> m_zookeepers;
    std::map<std::string, std::string> m_assignments;
    int m_foodStorage;
};


#endif // ZOO_H