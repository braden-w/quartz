---
date: "2021-11-22"
date modified: "2022-06-15"
title: Mark Notes
---

# Mark Notes

## Grammar Trees
```
//   [local]    = VARIABLE=VALUE
//   [red_op]   = < / << / > / >> / 2> / 2>> / &>
//   [redirect] = [red_op] FILENAME
//   [prefix]   = [local] / [redirect] / [prefix] [local] / [prefix] [redirect]
//   [suffix]   = TEXT / [redirect] / [suffix] TEXT / [suffix] [redirect]
//   [redList]  = [redirect] / [redList] [redirect]
//   [simple]   = TEXT / [prefix] TEXT / TEXT [suffix]
//                     / [prefix] TEXT [suffix]
//   [subcmd]   = ([command]) / [prefix] ([command]) / ([command]) [redList]
//                            / [prefix] ([command]) [redList]
//   [stage]    = [simple] / [subcmd]
//   [pipeline] = [stage] / [pipeline] | [stage]
//   [and-or]   = [pipeline] / [and-or] && [pipeline] / [and-or] || [pipeline]
//   [sequence] = [and-or] / [sequence] ; [and-or] / [sequence] & [and-or]
//   [command]  = [sequence] / [sequence] ; / [sequence] &
```

From 201. Start from bottom layer. It

```
int handleStage(const CMD *cmdList){
    if(cmdList->type == SUBCMD){
        return handleSubCMD(cmdList);
    }else{
        return simple(cmdList);
    }

}
```

```c
int handleConditional(const CMD *cmdList){
    int status;
    if(cmdList->type == SEP_AND || cmdList->type == SEP_OR){

        status = handleConditional(cmdList->left);
        if((status == 0 && cmdList->type == SEP_AND) || (status != 0 && cmdList->type == SEP_OR)){
            return pipelineProcess(cmdList->right);
        }
		else
		{
            return EXIT_SUCCESS;
        }

    }else{
        return pipelineProcess(cmdList);
    }
```

When you're in the sequence layer,

## More Questions
Pipeline, parallel, background

If you were to start from scratch, which would you start with? Could you pseduo-code it?

Fork in 4 places
1. In simple, right before execvp
2. Inside pipeline
3. Inside subcmd function
4. In running backgrounds (in sequence layer)
Ran waitpid for 1-3

When you wrap in parenthesis, it forks and puts it in a child environment.

Consider

```bash
ls; (cd ..); ls

``` 
vs

```bash
ls; cd ..; ls
```

# Order of Tackling Stuff for Elven
1. Process_simple (6-7 hours expected)
	- This will be the most difficult case and requires local, red_op, redirect, prefix, suffix, redList
	- Helpful functions
		- Copy environment
		- Restore default environment
		- ```setError(int status)```
		- setRedirect ()
			- Handle heredocs, > <, [red_op], [redirect], [prefix], [suffix], [redList]

			- **Whenever something is called in the grammar tree more than once, put it in a discrete function. **

and then go up the grammar tree
2. Process_stage (super simple)
3. Pipelining (difficult)
- For inspiration, can copy pipe.c from example code but it will follow a different model for piping. Pipe.c will fork once, walkthrough will pipe twice. It will be different method than walkthrough
4. And-or (not too bad)
5. Sequence and command (combine handling in one layer/function)
6. Process subcmd

## Is the Walkthrough Useful?
Yes but it won't tell you to do layer by layer, we will be slighly different.

## Something That Saves a Bunch of Time
When you do sequence, do left to right, not right to left

## Breaking Down an Example
```bash
sleep 4 && echo bg1 & sleep 5 && echo bg2 & echo forground
```

![[Pasted image 20211031230448.png]]
![[Pasted image 20211031230406.png]]
Three instance, from left to rights:
1. Backgrounded
2. Backgrounded
3. Foregrounded

![](https://i.imgur.com/er7FW9l.png)

Top branch is represented as pid=0, bottom branch is pid>0

You don't want the child to go on indefinitely
