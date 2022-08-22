
Lecture 1February 1st, 2021
    Return 0 to indicate everything is okay
    Use && to string in UNIX commands—useful for banging two commands together
Lecture 3 February 16th, 2021
    Always use doubles over floats, barely any performance difference
Lecture 5 February 18th, 2021
    Break↔jumps out of innermost loop 
    Goto→jump to line in function
        goto foundIt
Lecture 6 February 20th, 2021
    Pointers
        int x = 1, y = 2, z[10];
int *ip; /* ip is a pointer to int */
ip = &x; /* ip now points to x */
y = *ip; /* y is now 1 */
*ip = 0; /* x is now 0 */
ip = &z[0]; /* ip now points to z[0] */
        Static variables for global variables
Lecture 7 February 26th, 2021
    Use assert to check malloc does not return null
        s2 = malloc(sizeof(char) * strlen(s)+1));
assert(s2);
    free often
        // make a copy of a string constant to modify it
char *copy = allocStrcpy("hi there!");

puts(copy);
copy[0] = 'b';
puts(copy);

// don't do this, clobbers malloc header
// strcpy(copy - 12, "ha ha i destroy your data");

free(copy);

// don't do this, already freed
// copy[1] = 'o';
// puts(copy);

// 0x12 is not a legal address to write to
// strcpy((char *) 0x12, "hi");
Lecture 8 March 28th, 2021
    Parnas Principle↔Give just enough abstraction
Lecture 9 March 28th, 2021
    Hash tables
        Linked list
            https://remnote-user-data.s3.amazonaws.com/EbPyKGnoTvRAcA4HBuI2L-WF7-zdLQ5uItcUuKhjs35f1L6_p5uOjZ8acVE-_-ksdESeVLKEPtqdA5aJJ29USSq0SZ_os_6jYg1efgsIHeJX1BhcrUQSb6xB9RWkttCM.png
        Open addressing↔If x doesn't fit in h(x) , try h(x)+1, h(x)+2,... until it hits an empty slot
Commands
    ssh bmw52@node.zoo.cs.yale.edu
    scp file.c bmw52@node.zoo.cs.yale.edu:~/cs223/
    Compile file
        The first line is the command to compile the program. The dollar sign is my prompt, which is printed by the system to tell me it is waiting for a command. The command calls gcc as c99 with arguments -g3 (enable maximum debugging info), -o (specify executable file name, otherwise defaults to a.out), count (the actual executable file name), and count.c (the source file to compile). This tells gcc that we should compile count.c to count in C99 mode with maximum debugging info included in the executable file.
            c99 -g3 -Wall -o count count.c && ./count ./count
scp -r bmw52@node.zoo.cs.yale.edu:/c/cs223/Hwk1 "/Users/braden/Google Drive (braden.wong@yale.edu)/2021 Yale Classes/CPSC-223/Resources": retrieve help files
scp -r "/Users/braden/Google Drive (braden.wong@yale.edu)/Yale/CS201/hw#" bmw52@node.zoo.cs.yale.edu:~/cs201/→send file
Access test files
    cd /c/cs223/Hwk1/testFiles/
While cd cs201
    /c/cs201/bin/autograde --test 0↔autograde
    /c/cs201/bin/submit 0  hw0.rkt↔submit
    /c/cs201/bin/check  0↔check
    /c/cs201/bin/unsubmit  oops.rkt↔remove submitted file
    /c/cs201/bin/protect  hw.rkt↔protect from deletion
    /c/cs201/bin/unprotect  hw.rkt↔unprotect
    /c/cs201/bin/retrieve  hw.rkt↔retrieve in case you deleted your local copy
