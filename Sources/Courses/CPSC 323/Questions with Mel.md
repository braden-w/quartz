---
date: "2021-11-01"
date modified: "2022-06-15"
title: Questions with Mel
---

# Questions with Mel
- How to handle multiple commands and sub commands
- OS File Descriptors

- What is the increment order steps of features

- Are there any functions that are super useful? Memcopy, etc.

- Understand CMD structure
- What is redirection?
- What is type SIMPLE

.type = SIMPLe

what is the fork exec model

what is Execvp, waitpid() from timestamp 35:23

What does it mean to handle redirection, and we only want the file to open in the child process

What is a heredoc
What is a command tree

Data structure

```c
int process(CMD * cmdList):
calls handle_pipeline(cmdList)

int handle_pipeline(CMD * cmdList):
calls handle_simple(cmdList)

int handle_simple(CMD * cmdList):
launches process
```

from GPT but not the one from spec:
```c
int process(CMD * cmdList):
calls handle_pipeline(cmdList)

int handle_pipeline(CMD * cmdList):
calls handle_command(cmdList)

int handle_command(CMD * cmdList):
calls handle_simple(cmdList)

int handle_simple(CMD * cmdList):
calls handle_redirection(cmdList)

int handle_redirection(CMD * cmdList):
calls handle_pipe(cmdList)

int handle_pipe(CMD * cmdList):
calls handle_background(cmdList)
```

## Conditionals
- What are conditionals
Implemention should be fairly simple
Can use the tree structure to implement short circuiting recursively. Based on exit status of recursive processing of left child, decide to recursively process the right child

## Sequences
- What are sequences
Implemention is a bit more difficult

## Backgrounding Commands & Zombies
- What does it mean to cleanup zombies?

## Subcommmands
Use a subshell. Very easy to implement once you have simples

## Builtins
- What are builtins
Implementation should be builtins

# Help From Office Hours
We're given a tree structure of commands. We need to implement a recursive function that will take in a tree and execute it.
Background separator, foreground separator, pipe, subcommand, simple command

a ; b
   ;
 /   \
 a b

 Auto interprets order of operations in command line

 A simple is a singular command and ints arguments (a leaf node)

```bash
 echo hello ; echo hello2
 ```

 `echo hello` and `echo hello2` are simple commands

The tree is a tree of cmd structs

## File Handling and Redirection > <
File handle is an integer that represents a file. It is a unique identifier for a file, and is a file descriptor.

Open file is a function that takes in a file name and returns a file descriptor. Write to file is a function that takes in a file descriptor and a string.

File descriptors 0, 1, and 2 are standard input, standard output, and standard error.

Open a file, then use dup2 to write to the function. You don't need to redirect standard error. You will be redirecting standard input and output, intercepting it along the way

In the CMD struct, we have a from type and to type and from file and to file, which is for redirecting.

In the CMD struct, we have a list of cmd structs. We need to implement a function that will take in a cmd struct and execute it.

## Fork Exec and Child Processes
execvp is a function that takes in a command and an array of arguments. It executes the command (transfers program control to the start of that command). It never comes back or returns (it won't give control back to you unless there is an error).

Since it never returns, we really don't want to run it in the main process. We want to run it in a child process.

Child Processes also are cleaner and are more modular.

## Heredocs
Enables me to write a string in terminal as if it was a file. Wrap it with HERE

```bash
cat << HERE
hello
HERE
```

## Parse.h
from_type and to_type can be one of the following:
```c
RED_IN,           // <    Redirect stdin to file
RED_IN_HERE,      // <<   Redirect stdin to HERE document

RED_OUT,          // >    Redirect stdout to file
RED_OUT_APP,      // >>   Append stdout to file
RED_OUT_ERR,      // &>   Redirect stdout and stderr to file (UNUSED)

RED_ERR,          // 2>   Redirect stderr to file (UNUSED)
RED_ERR_APP,      // 2>>  Append stderr to file (UNUSED)
```

//   < A B | C | D | E > F PIPE                          //
//                                            /    \                         //
//                                        PIPE E >F                     //
//                                       /    \                              //
//                                   PIPE D                             //
//                                  /    \                                   //
//                              <A B C                                  //

<A B
type is simple
from_type is red_in

## Backgrounding Commands & Zombies
When a process dies, it is a zombie. Zombies are processes that have finished executing but are still in the process table.

In the time between a process has died and when it is checked on, it is a zombie process. Even though it is dead, the information is still there.

## Order of Approach
Simple first
Background is easier than piping, do one
Do the other
Conditionals
Separators
Subcommands

## Subcommmands
When you encounter one, you want to fork such that you execute the content of the subcommand in a completely new shell as if it were a new command in an original shell.

## Builtins
- What are builtins
Implementation should be builtins
