#ifndef ZOOKEEPER_H
#define ZOOKEEPER_H

#include <string>

class Zoo;

class Zookeeper {
public:
    Zookeeper(const std::string& name, Zoo* zoo);

    ~Zookeeper();

    std::string getName();

    void feedAssignedAnimal(int foodAmount);

private:
    // "m_" prefixes indicate that these are [m]embers of the class
    std::string m_name;
    Zoo* m_zoo;
};


#endif // ZOOKEEPER_H