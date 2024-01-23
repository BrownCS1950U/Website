#ifndef ANIMAL_H
#define ANIMAL_H

#include <iostream>
#include <string>

class ZooKeeper;

class Animal {
public:
    Animal(std::string name);
    ~Animal();
    std::string getName();
    void eat(int foodCount);

private:
    std::string m_name; // Prefix "m_" indicates that this is a member of the class
};

#endif // ANIMAL_H