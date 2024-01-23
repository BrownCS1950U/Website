#ifndef ANIMAL_H
#define ANIMAL_H

#include <iostream>
#include <string>

class Animal {
public:
    Animal(std::string name);
    ~Animal();
    std::string getName();
    void eat(int foodCount);

private:
    // "m_" prefixes indicate that these are [m]embers of the class
    std::string m_name; 
};

#endif // ANIMAL_H


