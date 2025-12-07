+++
title = "Same Difference?"
date = "2023-12-24"
tags = ["math", "percentages", "numbers"]
+++

A friend asked me, are there any number pairs which share the same percentage difference in increasing to, and decreasing back to each other? eg. _100_ to _150_ is a _50%_ increase, but _150_ to _100_ is a _33.33%_ decrease (one third). Are there any which are equal in increasing and decreasing change, so _X_ to _Y_ is an _A%_ increase and _Y_ to _X_ is a _B%_ decrease, where _A=B_?

If _X_ and _Y_ are equal, yes, it’s always _0%_, but if we ignore those, any others? No, it doesn’t seem so, at least not in natural numbers. Maybe something like _10_ to _20_, no, that’s _100%_ and then _50%_.

But what about unnatural numbers, positive and negative pairs? How about _\-1_ to _1_? This is a bit mind-bending because there’s a negative involved. We got into quite the argument about it.

Let’s use the [BBC Bitesize given method for working this out](https://www.bbc.co.uk/bitesize/guides/zpjmjty/revision/2):

**Calculating percentage increase**  

    1. Work out the difference between the two numbers being compared.  
    2. Divide the increase by the original number and multiply the answer by 100.  
    3. In summary: percentage increase = increase ÷ original number × 100.

And the other way..

**Calculating percentage decrease**

    1. Work out the difference between the two numbers being compared.  
    2. Divide the decrease by the original number and multiply the answer by 100.  
    3. In summary: percentage decrease = decrease ÷ original number × 100.

So by that basis, lets give that a crack with _\-1_ and _1_, first the increase between _\-1_ and _1_:

_\-1 – 1 = -2_  
_\-2 ÷_ -1 = _2_  
_2 x 100 = 200%_

Now lets try the decrease from _1_ to _\-1_:

_1 – -1 = 2  
2 ÷ 1 = 2  
2 x 100 = 200%_

They’re the same percentage difference! All pairs of negative and positive numbers are always like this, because _x – -x = 2x_. Though it’s a bit horrible to think about.

This seems counterintuitive, how could the negative value increased by a magnitude be the same difference from its positive twin?

[Ismael](https://math.stackexchange.com/users/55205/ismael) on Math Stack Exchange [provides an excellent answer](https://math.stackexchange.com/a/3986352) to a question about un-twinned negative and positive values, which helps answer the same question and I’ll try to summarise:

It helps to split the problem into two parts, 1) Reaching zero from the first number, and 2) Reaching the the second number from zero.

_\-1_ to _0_ using the provided equation is _((-1 – 0) / -1) = 100%_ but we can’t do the same for the second part because we can’t divide by zero (for reference it would be; _((0 – 1) / 0)_ ). So instead we peer at result of the first part, it took us _100%_ to step from _\-1_ to _0_, so _0_ to _1_, a change of also of _1_ would be the same, _100%_. Completed, these two parts of the journey sum to _200%_.

The other way, _1_ to _\-1_ works the same way and produces the same result; _1_ to _0_ is _((1 – 0) / 1) = 100%_ for our first part, then _0_ to _\-1_ is _((0 – -1) / 0)_, but again we cannot divide by zero, so we glimpse at our first part and see it must be another _1_, or _100%_, making _200%_, a decrease of the same magnitude.

The difference, both ways between _\-1_ and _1_ is _200%_, it is the same for all pairs of natural numbers and their negative counterparts.

You might be despairing thinking, **“no, negative one plus 200% of negative one is negative three! Not positive one!”** (_\-1 + -1 + -1 = -3_) and you’re right, sort of. What you’ve observed there is a _decrease_, while we’re looking for an _increase_ between _\-1_ and _1_. The percentage _change_ is the same between _\-1_ and _\-3_ as it is _\-1_ and _1_, but it’s going down instead of up. This curious happenstance is the same for all negative and positive pairs; _\-25_ plus _200%_ of _\-25_ (_\-50)_ is _\-75_, but that’s _decreasing_, while _increasing_ the same 200% grants us _25_. Ultimately, the equation of _((start – final) / start)_ helps us side-step this awkwardness.