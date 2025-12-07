+++
title = "∸ Monus without Max"
date = "2024-07-03"
tags = ["math", "monus", "operators"]
+++

[Monus](https://en.wikipedia.org/wiki/Monus) is an fun operator, its symbol is a dot above a minus; `∸`. Monus is truncated subtraction, or in clearer terms, subtraction where the result stops at zero, eg. if you perform _5 ∸ 10_, you get _0_ instead of _\-5_. But _5 – 3_ will result in _2_ as normal.

The [Wikipedia article for Monus](https://en.wikipedia.org/wiki/Monus) describes a few methods to perform the operation which involve conditionals or abstract functions like _Max(x, 0)_ but my preferred method is the simple _(x+|x|)/2_

But the most fun method I’ve seen so far goes to [Michael Hoppe](https://math.stackexchange.com/a/1403772) on _Mathematics Stack Exchange_ with _0√x2-x⋅x_