CXX = g++
CXXFLAGS = -Wall -Wextra -std=c++17
SRCS = main.cpp zoo.cpp zookeeper.cpp animal.cpp
TARGET = zoo
zoo: $(SRCS:.cpp=.o)

$(TARGET): $(SRCS:.cpp=.o)
	$(CXX) $(CXXFLAGS) -o $@ $^

%.o: %.cpp
	$(CXX) $(CXXFLAGS) -c -o $@ $<

clean:
	rm -f *.o $(TARGET)