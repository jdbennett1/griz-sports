# Notes From Project

** For the mutation.py we used ChatGPT to help us with replacing the operators in the file for each mutant. In our code we originally tried changing the operators by searching the read in file by characters and replacing the specific character. This partially works but leads to another problem, multicharacter operators such as >= or += which when using our original code cannot be identified. This lead us to ask chat how to search a file by an operator and replace it with a new one. This lead us to the re import, which uses a regex pattern for the operators and allowed for there to be a start and end point for each operator. this allowed for the multicharacter operators to be mutated. **

** One other complication we ran into is that when the power function in our class code gets mutated ie: a**b, our code can mutate one of the 2 * leading to a syntax error for some mutations when we run our tests. we counted these as fails considering the file was mutated to the point where it couldn't compile. **     

* Mutation Score = 93.33% 