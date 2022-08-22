---
aliases: Server State versus Application State
tags:
 - On/Software_Engineering
 - Type/Advice/Derived
 - Type/Comparison 
title: 'Most People Talking About State Are Referring to Server State, Not Application State'
date: "2022-08-12"
date modified: "2022-08-12"
---

# Most People Talking About State Are Referring to Server State, Not Application State

## [[Application State]]
Example: Modal

```js
const [open, set0pen] = useState(false);
```

## [[Server State]]
Example: Fetching Data
```js
const (data, isLoading) useQuery("data", 0) = (await fetch("/")). json0));
```

# References
- (References:: [Redux vs React Query vs Zustand - DROWNING IN STATE - YouTube](https://www.youtube.com/watch?v=5-1LM2NySR0&list=WL&index=13))
