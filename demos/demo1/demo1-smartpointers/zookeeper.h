#ifndef ZOOKEEPER_H
#define ZOOKEEPER_H

#include <string>
#include <memory>

class Zoo;

class Zookeeper {
public:
    Zookeeper(const std::string& name, std::shared_ptr<Zoo> zoo);

    ~Zookeeper();

    std::string getName();

    void feedAssignedAnimal(int foodAmount);

private:
    std::string m_name;

    // We use a weak pointer here because:
    // 1) We cannot use a unique pointer because multiple zookeepers are holding pointers to the same zoo
    // 2) We cannot use a shared pointer because the zoo is already holding shared pointers to the zookeepers, so using
    //    a shared pointer here would create a reference cycle: the zookeeper object is supposed to destroyed after the
    //    zoo object has been destroyed, but the zoo will only be destroyed after its shared pointer counter reaches zero.

    std::weak_ptr<Zoo> m_zoo;
};


#endif // ZOOKEEPER_H