---
date: "2022-06-09"
date modified: "2022-06-15"
title: 06_19_21 Post on Github about Switch
---

# 06_19_21 Post on Github About Switch
06/19/21 Post on Github about Switch

Finally got it to work!!

Spent more time than I would like on this one. So many hiccups after another!
1. **Switch** docs only covered v-model; unbeknownst to me, v-model has a breaking change in Vue 3 where modelValue is passed instead of value, as documented here:  https://v3.vuejs.org/guide/migration/v-model.html. So when I was attempting to use :value and @input, the logic broke (I circumvented this through not using v-model)
2. **Switch** wouldn't properly accept a background color and CSS properties correctly (at least if we kept other parts of the setup). This was bad because the default background color was white, so it was basically invisible 😆
3. I wanted to preserve our neat checkbox, but doing so was completely broken under Switch. If we clicked on the input when inside a Switch, it would not work, while it would when not inside a **Switch**
4. Switch alignment was off

In the end I decided not to use **Switch**, instead just using some divs and tailwind.

The actual fixes were:
- Block default behavior of checkbox through `      e.preventDefault();`
- apply `        absolute top-1/2 transform        -translate-y-1/2` to the checkbox so that it is vertically centered in the switch
- `@apply` was breaking the appearance of the border color of the switches; removing them entirely fixed all the colors
