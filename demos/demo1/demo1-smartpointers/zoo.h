#ifndef ZOO_H
#define ZOO_H

#include <map>
#include <memory>

class Animal;
class Zookeeper;

// Small quirk of shared pointers: need to inherit from std::enable_shared_from_this<ClassName> to enable usage of the "this" pointer
class Zoo : public std::enable_shared_from_this<Zoo> {
public:
    Zoo();
    ~Zoo();

    void addFood(int foodAmount);
    int withdrawFood(int foodAmount);

    void addAnimal(const std::string& animalName);
    void addZookeeper(const std::string& zookeeperName);
    
    // Note the usage of const reference pointers for getAnimal and getAssignedAnimal: 
    // since the animal pointers are unique pointers, we cannot return a copy of the pointer
    std::shared_ptr<Zookeeper> getZookeeper(const std::string& zookeeperName);
    const std::unique_ptr<Animal>& getAnimal(const std::string& animalName);
    const std::unique_ptr<Animal>& getAssignedAnimal(const std::string& zookeeperName);

    void assignZookeeperToAnimal(const std::string& zookeeperName, const std::string& animalName);

private:
    // Using unique pointers here means that the zoo object will maintain
    // sole ownership of the animals: only the zoo may have pointers to the animals,
    // and the pointers will be deleted after the zoo is
    std::map< std::string, std::unique_ptr<Animal> > m_animals;

    // Using shared pointers here means that additional entities other than the zoo
    // can hold pointers to the zookeepers, such as main(). This is more
    // convenient, but takes additional overhead to track reference counts and 
    // requires the use of weak pointers to break reference cycles (see zookeeper.h for more details)
    std::map< std::string, std::shared_ptr<Zookeeper> > m_zookeepers;

    std::map<std::string, std::string> m_assignments;
    int m_foodStorage;
};


#endif // ZOO_H